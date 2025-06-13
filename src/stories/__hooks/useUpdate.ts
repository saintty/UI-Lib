import { DependencyList, useEffect, useRef } from "react";

export const useUpdate = (
  effect: () => void | (() => void),
  deps: DependencyList
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
