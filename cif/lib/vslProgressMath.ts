/**
 * Barra de progresso "falsa": avança rápido até o breakpoint (ex.: 75% aos 10min reais),
 * depois desacelera até 100% no fim do vídeo. Independente do gate real do CTA.
 */
export function computeFakeProgress(
  t: number,
  duration: number,
  breakpointSeconds: number,
  breakpointPercent: number,
): number {
  if (duration <= 0) return 0;
  if (t <= 0) return 0;
  if (t >= duration) return 100;

  const safeBpSec = Math.min(breakpointSeconds, duration * 0.6);

  if (t <= safeBpSec) {
    return (t / safeBpSec) * breakpointPercent;
  }
  return (
    breakpointPercent +
    ((t - safeBpSec) / (duration - safeBpSec)) * (100 - breakpointPercent)
  );
}

/**
 * Gate do CTA: usa o tempo REAL assistido (t/duration), nunca a barra falsa.
 * Aceita um override opcional em segundos absolutos (minuto exato da oferta).
 */
export function isCtaUnlocked(
  t: number,
  duration: number,
  unlockPercent: number,
  absoluteSecondsOverride?: number,
): boolean {
  if (duration <= 0) return false;
  if (absoluteSecondsOverride !== undefined && t >= absoluteSecondsOverride) {
    return true;
  }
  return t / duration >= unlockPercent / 100;
}
