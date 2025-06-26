export const safeParse = <T>(value: string): T | null => {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};
