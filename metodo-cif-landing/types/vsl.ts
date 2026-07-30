export interface VslPlayerConfig {
  /** ID do vídeo "não listado" no YouTube (parte final da URL youtu.be/<id>) */
  youtubeVideoId: string;
  fakeBar: {
    breakpointSeconds: number;
    breakpointPercent: number;
  };
  ctaUnlock: {
    percent: number;
    /** Override opcional: minuto exato (em segundos) em que a oferta é feita na copy */
    absoluteSeconds?: number;
  };
  persistenceKey: string;
}

export interface VslPlayerState {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  isReady: boolean;
  hasUnlocked: boolean;
}
