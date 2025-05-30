import { useEffect, useRef } from "react";

export const useInitial = (callback: () => void) => {
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current) {
      callback();
      isInit.current = true;
    }
  }, [callback]);
};
