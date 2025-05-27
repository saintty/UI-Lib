import { RefObject, useEffect } from "react";

export const useClickOutside = (
  refs: RefObject<HTMLElement | null>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled?: boolean
) => {
  useEffect(() => {
    if (typeof enabled === "boolean" && !enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target instanceof Node ? event.target : null;
      const insideRef = refs.some(
        (ref) => ref.current && ref.current.contains(target)
      );

      if (!insideRef) handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler, enabled]);
};
