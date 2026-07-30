import type { VslPlayerConfig } from './types/vsl.ts';

// Link de checkout da Hotmart (ou outra plataforma). Placeholder até o cliente enviar o link real.
export const CHECKOUT_URL = 'https://pay.hotmart.com/PLACEHOLDER';

// ID do vídeo "não listado" no YouTube com a VSL completa (32 min).
// Ex.: em https://youtu.be/dQw4w9WgXcQ o ID é "dQw4w9WgXcQ".
export const YOUTUBE_VIDEO_ID = 'PLACEHOLDER_VIDEO_ID';

export const VSL_CONFIG: VslPlayerConfig = {
  youtubeVideoId: YOUTUBE_VIDEO_ID,
  fakeBar: {
    breakpointSeconds: 600, // 10 min reais -> 75% da barra falsa
    breakpointPercent: 75,
  },
  ctaUnlock: {
    percent: 85, // libera o CTA aos 85% do tempo REAL assistido (não da barra falsa)
    // absoluteSeconds: 1320, // override opcional: minuto exato da oferta (~22:00), quando o cliente confirmar
  },
  persistenceKey: 'cif-vsl-progress-v1',
};
