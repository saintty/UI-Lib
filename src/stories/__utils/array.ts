export const array = <T = undefined, R = T>(
  length: number,
  mapFn?: (value: T, index: number) => R
): R[] => (mapFn ? Array.from({ length }, mapFn) : Array.from({ length }));
