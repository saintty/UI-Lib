import { StorageValue, ValuesOf } from "../types";

import { isServer } from "../__utils/is-server";
import { safeParse } from "../__utils/safe-parse";

export const SessionStorageKeys = {
  username: "username",
} as const;

export type SessionStorageKeys = ValuesOf<typeof SessionStorageKeys>;

export const createStorage = <T>(key: SessionStorageKeys): StorageValue<T> => ({
  get: () =>
    isServer() ? null : safeParse<T>(sessionStorage.getItem(key) || "null"),
  set: (value) => sessionStorage.setItem(key, JSON.stringify(value)),
  clear: () => sessionStorage.removeItem(key),
});
