import { KeyboardEvent, RefObject, useCallback } from "react";

import { getFocusableElements } from "../__utils/get-focusable";

export const useFocusTrap = (ref: RefObject<HTMLElement | null>) => {
  const focusNext = useCallback(
    (event: KeyboardEvent) => {
      if (!ref.current) return;

      const focusable = getFocusableElements(ref.current);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      const goingForward = !event.shiftKey;
      const active = document.activeElement;

      if (goingForward && active === last) {
        event.preventDefault();
        first.focus();
      } else if (!goingForward && active === first) {
        event.preventDefault();
        last.focus();
      }
    },
    [ref]
  );

  return { focusNext };
};
