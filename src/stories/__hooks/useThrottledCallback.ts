import { useRef, useCallback } from "react";

const defaultDelay = 800;

export const useThrottledCallback = <Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay = defaultDelay
) => {
  const lastCallTimeRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const throttledFn = useCallback(
    (...args: Args) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTimeRef.current;

      if (timeSinceLastCall >= delay) {
        lastCallTimeRef.current = now;
        callback(...args);
      } else if (!timeoutRef.current) {
        const remaining = delay - timeSinceLastCall;

        timeoutRef.current = setTimeout(() => {
          lastCallTimeRef.current = now;
          timeoutRef.current = null;
          callback(...args);
        }, remaining);
      }
    },
    [callback, delay]
  );

  return throttledFn;
};
