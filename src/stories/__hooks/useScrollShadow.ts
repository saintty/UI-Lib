import { RefObject, useCallback, useEffect, useState } from "react";

export const useScrollShadow = <T extends HTMLElement | null>(
  ref: RefObject<T>
) => {
  const [topShadow, setTopShadow] = useState(false);
  const [bottomShadow, setBottomShadow] = useState(false);

  const updateShadows = useCallback(() => {
    if (!ref.current) return;

    const { scrollTop, scrollHeight, clientHeight } = ref.current;

    setTopShadow(scrollTop > 0);
    setBottomShadow(scrollTop + clientHeight < scrollHeight);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    updateShadows();

    el.addEventListener("scroll", updateShadows);

    return () => {
      el.removeEventListener("scroll", updateShadows);
    };
  }, [ref, updateShadows]);

  return { topShadow, bottomShadow };
};
