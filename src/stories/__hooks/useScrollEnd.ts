import { RefObject, useCallback, useEffect } from "react";

type UseScrollEndHook<T extends HTMLElement | null> = {
  ref: RefObject<T>;
  fn?: () => void;
  offset?: number;
};

export const useScrollEnd = <T extends HTMLElement | null>({
  ref,
  fn,
  offset = 0,
}: UseScrollEndHook<T>) => {
  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const { scrollTop, scrollHeight, clientHeight } = element;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - offset;

    if (isAtBottom) fn?.();
  }, [fn, offset, ref]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref, offset, handleScroll]);
};
