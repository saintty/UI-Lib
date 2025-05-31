export const clamp = (min: number, now: number, max: number) =>
  Math.min(Math.max(min, now), max);
