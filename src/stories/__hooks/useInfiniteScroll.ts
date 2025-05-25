import { RefObject, useEffect, useRef } from "react";

type UseInfiniteScrollHook = {
  disabled?: boolean;
  threshold?: number;
  onLoadMore: () => void;
};

type ReturnValue<T extends HTMLElement = HTMLDivElement> = [
  RefObject<T | null>
];

export const useInfiniteScroll = <T extends HTMLElement = HTMLDivElement>({
  disabled = false,
  threshold = 0,
  onLoadMore,
}: UseInfiniteScrollHook): ReturnValue<T> => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || disabled) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - threshold;

      console.log(isNearBottom);
      if (isNearBottom) onLoadMore();
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef, onLoadMore, disabled, threshold]);

  return [containerRef];
};
