import { RefObject, useEffect } from "react";

export const useFocusOut = (
  ref: RefObject<HTMLElement | null>,
  callback?: () => void
) => {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timeout: NodeJS.Timeout;

    const handleFocusOut = () => {
      timeout = setTimeout(() => {
        if (!node.contains(document.activeElement)) callback?.();
      }, 0);
    };

    node.addEventListener("focusout", handleFocusOut);

    return () => {
      clearTimeout(timeout);
      node.removeEventListener("focusout", handleFocusOut);
    };
  }, [callback, ref]);
};
