import React, { useCallback } from 'react';

interface VslPlayerProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isReady: boolean;
  isPlaying: boolean;
  fakeProgress: number;
  togglePlay: () => void;
}

const BLOCKED_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'Home', 'End']);

export const VslPlayer: React.FC<VslPlayerProps> = ({
  containerRef,
  isReady,
  isPlaying,
  fakeProgress,
  togglePlay,
}) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (BLOCKED_KEYS.has(e.key)) {
        e.preventDefault();
        return;
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePlay();
      }
    },
    [togglePlay],
  );

  return (
    <div
      className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-asphalt select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* pointer-events-none: nenhum clique chega ao iframe do YouTube por baixo, só ao nosso botão acima */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />

      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-asphalt">
          <div className="w-10 h-10 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
        </div>
      )}

      <button
        type="button"
        onClick={togglePlay}
        onKeyDown={handleKeyDown}
        aria-label={isPlaying ? 'Pausar vídeo' : 'Assistir vídeo'}
        className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors group"
      >
        {!isPlaying && isReady && (
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber/90 group-hover:bg-amber flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
            <svg className="w-7 h-7 md:w-9 md:h-9 text-asphalt translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
        <div
          className="h-full bg-amber transition-[width] duration-300 ease-linear"
          style={{ width: `${fakeProgress}%` }}
        />
      </div>
    </div>
  );
};
