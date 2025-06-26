export type ValuesOf<T> = T[keyof T];

export const SizeValues = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export type Size = ValuesOf<typeof SizeValues>;

export type StorageValue<T> = {
  get: () => T | null;
  set: (value: T) => void;
  clear: () => void;
};
