export const delay = <T>(value: T, delayMs = 1500) =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), delayMs);
  });
