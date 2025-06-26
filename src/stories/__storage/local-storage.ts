import { StorageValue, ValuesOf } from "../types";

import { isServer } from "../__utils/is-server";
import { safeParse } from "../__utils/safe-parse";

export const LocalStorageKeys = {
  username: "username",
} as const;

export type LocalStorageKeys = ValuesOf<typeof LocalStorageKeys>;

export const createStorage = <T>(key: LocalStorageKeys): StorageValue<T> => ({
  get: () =>
    isServer() ? null : safeParse<T>(localStorage.getItem(key) || "null"),
  set: (value) => localStorage.setItem(key, JSON.stringify(value)),
  clear: () => localStorage.removeItem(key),
});
