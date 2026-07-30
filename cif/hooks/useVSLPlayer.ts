import { useCallback, useEffect, useRef, useState } from 'react';
import type { VslPlayerConfig } from '../types/vsl.ts';
import { computeFakeProgress, isCtaUnlocked } from '../lib/vslProgressMath.ts';

// A YouTube IFrame API não publica tipos oficiais; mantemos a superfície mínima que usamos.
interface YTPlayer {
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  playVideo(): void;
  pauseVideo(): void;
  destroy(): void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars: Record<string, number>;
          events: {
            onReady: (event: { target: YTPlayer }) => void;
            onStateChange: (event: { data: number; target: YTPlayer }) => void;
          };
        },
      ) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const SEEK_TOLERANCE_SECONDS = 1.5;
const POLL_INTERVAL_MS = 250;
const PERSIST_INTERVAL_MS = 2000;

let apiLoadPromise: Promise<void> | null = null;

function loadYouTubeIframeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiLoadPromise) return apiLoadPromise;

  apiLoadPromise = new Promise((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve();
    };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  });

  return apiLoadPromise;
}

interface PersistedProgress {
  lastAllowedTime: number;
  hasUnlocked: boolean;
}

function loadPersisted(key: string): PersistedProgress | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as PersistedProgress) : null;
  } catch {
    return null;
  }
}

function savePersisted(key: string, data: PersistedProgress): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // localStorage indisponível (modo privado, quota) - falha silenciosa, não é crítico.
  }
}

export function useVSLPlayer(config: VslPlayerConfig) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const lastAllowedTimeRef = useRef(0);
  const hasUnlockedRef = useRef(false);
  const lastPersistRef = useRef(0);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasUnlocked, setHasUnlocked] = useState(false);

  const persist = useCallback(() => {
    savePersisted(config.persistenceKey, {
      lastAllowedTime: lastAllowedTimeRef.current,
      hasUnlocked: hasUnlockedRef.current,
    });
  }, [config.persistenceKey]);

  useEffect(() => {
    const persisted = loadPersisted(config.persistenceKey);
    if (persisted) {
      lastAllowedTimeRef.current = persisted.lastAllowedTime;
      hasUnlockedRef.current = persisted.hasUnlocked;
      setHasUnlocked(persisted.hasUnlocked);
    }

    let cancelled = false;

    loadYouTubeIframeApi().then(() => {
      if (cancelled || !containerRef.current || !window.YT) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: config.youtubeVideoId,
        playerVars: {
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            const d = event.target.getDuration();
            setDuration(d);
            setIsReady(true);
            if (lastAllowedTimeRef.current > 0) {
              event.target.seekTo(lastAllowedTimeRef.current, true);
            }
          },
          onStateChange: (event) => {
            const PlayerState = window.YT!.PlayerState;
            setIsPlaying(event.data === PlayerState.PLAYING);
            if (event.data === PlayerState.PAUSED || event.data === PlayerState.ENDED) {
              persist();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.youtubeVideoId, config.persistenceKey]);

  // Loop de bloqueio de avanço/retrocesso + atualização de progresso.
  useEffect(() => {
    const interval = setInterval(() => {
      const player = playerRef.current;
      if (!player) return;

      const current = player.getCurrentTime();
      const delta = current - lastAllowedTimeRef.current;

      if (delta < 0 || delta > SEEK_TOLERANCE_SECONDS) {
        player.seekTo(lastAllowedTimeRef.current, true);
      } else {
        lastAllowedTimeRef.current = current;
        setCurrentTime(current);
      }

      const d = player.getDuration();
      if (d > 0 && d !== duration) setDuration(d);

      if (
        !hasUnlockedRef.current &&
        isCtaUnlocked(lastAllowedTimeRef.current, d, config.ctaUnlock.percent, config.ctaUnlock.absoluteSeconds)
      ) {
        hasUnlockedRef.current = true;
        setHasUnlocked(true);
        persist();
      }

      const now = Date.now();
      if (now - lastPersistRef.current > PERSIST_INTERVAL_MS) {
        lastPersistRef.current = now;
        persist();
      }
    }, POLL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [config.ctaUnlock.percent, config.ctaUnlock.absoluteSeconds, duration, persist]);

  // Media Session API: neutraliza seek vindo de teclas de mídia do SO/tela de bloqueio.
  useEffect(() => {
    if (!('mediaSession' in navigator)) return;

    const reassertPosition = () => {
      playerRef.current?.seekTo(lastAllowedTimeRef.current, true);
    };

    try {
      navigator.mediaSession.setActionHandler('seekto', reassertPosition);
      navigator.mediaSession.setActionHandler('seekforward', reassertPosition);
      navigator.mediaSession.setActionHandler('seekbackward', reassertPosition);
    } catch {
      // Navegador sem suporte a alguma dessas ações - ignora.
    }

    return () => {
      try {
        navigator.mediaSession.setActionHandler('seekto', null);
        navigator.mediaSession.setActionHandler('seekforward', null);
        navigator.mediaSession.setActionHandler('seekbackward', null);
      } catch {
        // no-op
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', persist);
    return () => window.removeEventListener('beforeunload', persist);
  }, [persist]);

  const togglePlay = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }, [isPlaying]);

  const fakeProgress = computeFakeProgress(
    currentTime,
    duration,
    config.fakeBar.breakpointSeconds,
    config.fakeBar.breakpointPercent,
  );

  return {
    containerRef,
    isReady,
    isPlaying,
    currentTime,
    duration,
    fakeProgress,
    hasUnlocked,
    togglePlay,
  };
}
