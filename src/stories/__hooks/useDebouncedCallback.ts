import { useRef, useCallback, useEffect } from "react";

const defaultDelay = 800;

export const useDebouncedCallback = <Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay = defaultDelay
) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debouncedFn = useCallback(
    (...args: Args) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return debouncedFn;
};
