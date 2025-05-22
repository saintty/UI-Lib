import { KeyboardEvent, useCallback } from "react";

export const useKeyDown = (callback?: () => void) => {
  return useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        callback?.();
      }
    },
    [callback]
  );
};
