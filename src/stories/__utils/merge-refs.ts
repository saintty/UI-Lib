import { Ref, RefCallback, RefObject } from "react";

export const mergeRefs = <T extends HTMLElement = HTMLElement>(
  ...refs: Ref<T>[]
): RefCallback<T> => {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") ref(value);
      else if (ref != null && typeof ref === "object") {
        (ref as RefObject<T | null>).current = value;
      }
    });
  };
};
