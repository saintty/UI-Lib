import { cookies as getCookies } from "next/headers";

import { ValuesOf } from "../types";

import { isServer } from "../__utils/is-server";
import { safeParse } from "../__utils/safe-parse";

export const CookieStorageKeys = {
  role: "role",
} as const;

export type CookieStorageKeys = ValuesOf<typeof CookieStorageKeys>;

export type CookieSetOptions = {
  path?: string;
  maxAge?: number;
  expires?: Date;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
};

type CookieStorageValue<T> = {
  get: () => Promise<T | null>;
  set: (value: T, options?: CookieSetOptions) => Promise<void>;
  clear: () => Promise<void>;
};

const getCookie =
  <T>(key: CookieStorageKeys) =>
  async () => {
    if (isServer()) {
      const cookieStore = await getCookies();
      const value = cookieStore.get(key)?.value;

      return value ? safeParse<T>(value) : null;
    } else {
      const all = document.cookie.split("; ");
      const currentCookie = all.find((row) => row.startsWith(`${key}=`));

      if (!currentCookie) return null;
      const value = currentCookie.split("=")[1];
      return value ? safeParse<T>(decodeURIComponent(value)) : null;
    }
  };

const setCookie =
  <T>(key: CookieStorageKeys) =>
  async (value: T, options: CookieSetOptions = {}) => {
    const stringValue = encodeURIComponent(JSON.stringify(value));

    if (isServer()) {
      const cookieStore = await getCookies();
      cookieStore.set({
        name: key,
        value: stringValue,
        ...options,
      });
    } else {
      const { expires, maxAge, path, sameSite, secure } = options;
      const cookie = [`${key}=${stringValue}`];

      cookie.push(`path=${path || "/"}`);
      if (secure) cookie.push("secure");
      if (maxAge) cookie.push(`max-age=${maxAge}`);
      if (sameSite) cookie.push(`samesite=${sameSite}`);
      if (expires) cookie.push(`expires=${expires.toUTCString()}`);

      document.cookie = cookie.join("; ");
    }
  };

const clearCookie = (key: CookieStorageKeys) => async () => {
  if (isServer()) (await getCookies()).delete(key);
  else document.cookie = `${key}=; max-age=0; path=/`;
};

export const createStorage = <T>(
  key: CookieStorageKeys
): CookieStorageValue<T> => ({
  get: getCookie<T>(key),
  set: setCookie<T>(key),
  clear: clearCookie(key),
});
