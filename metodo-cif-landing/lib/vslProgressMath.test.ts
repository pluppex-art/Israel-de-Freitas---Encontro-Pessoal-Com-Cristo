import { describe, it, expect } from 'vitest';
import { computeFakeProgress, isCtaUnlocked } from './vslProgressMath.ts';

const D = 1920; // 32 min
const BP_SEC = 600; // 10 min
const BP_PCT = 75;

describe('computeFakeProgress', () => {
  it('checkpoints for a 32min video', () => {
    expect(computeFakeProgress(0, D, BP_SEC, BP_PCT)).toBe(0);
    expect(computeFakeProgress(300, D, BP_SEC, BP_PCT)).toBeCloseTo(37.5, 5);
    expect(computeFakeProgress(600, D, BP_SEC, BP_PCT)).toBeCloseTo(75, 5);
    expect(computeFakeProgress(1260, D, BP_SEC, BP_PCT)).toBeCloseTo(87.5, 5);
    expect(computeFakeProgress(1632, D, BP_SEC, BP_PCT)).toBeCloseTo(94.545, 2);
    expect(computeFakeProgress(1920, D, BP_SEC, BP_PCT)).toBe(100);
  });

  it('clamps values beyond duration to 100', () => {
    expect(computeFakeProgress(5000, D, BP_SEC, BP_PCT)).toBe(100);
  });

  it('returns 0 for a non-positive duration', () => {
    expect(computeFakeProgress(10, 0, BP_SEC, BP_PCT)).toBe(0);
  });

  it('guards against a breakpoint larger than the video (short test clips)', () => {
    // vídeo de teste de 60s com breakpoint configurado para 600s
    const shortD = 60;
    const half = computeFakeProgress(shortD / 2, shortD, BP_SEC, BP_PCT);
    expect(half).toBeGreaterThan(0);
    expect(half).toBeLessThan(BP_PCT);
    expect(computeFakeProgress(shortD, shortD, BP_SEC, BP_PCT)).toBe(100);
  });
});

describe('isCtaUnlocked', () => {
  it('stays locked below 85% of real watch time', () => {
    expect(isCtaUnlocked(1631, D, 85)).toBe(false);
  });

  it('unlocks at exactly 85% of real watch time', () => {
    expect(isCtaUnlocked(1632, D, 85)).toBe(true);
  });

  it('never unlocks from the fake bar percentage, only real time', () => {
    // aos 21:00 (1260s) a barra falsa mostra 87.5%, mas o tempo real é só 65.6% (<85%)
    expect(isCtaUnlocked(1260, D, 85)).toBe(false);
  });

  it('respects the optional absolute-seconds override', () => {
    expect(isCtaUnlocked(1300, D, 85, 1320)).toBe(false);
    expect(isCtaUnlocked(1320, D, 85, 1320)).toBe(true);
  });

  it('returns false for a non-positive duration', () => {
    expect(isCtaUnlocked(10, 0, 85)).toBe(false);
  });
});
