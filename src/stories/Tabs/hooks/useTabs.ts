import { useCallback, useId } from "react";

type UseTabsHook<T> = {
  tabs: T[];
  disabledKeys?: string[];
  getTabKey: (tab: T) => string;
};

export const useTabs = <T>({
  tabs,
  disabledKeys,
  getTabKey,
}: UseTabsHook<T>) => {
  const rootId = useId();

  const getTabId = useCallback(
    (tab: T) => `${rootId}-tab-${getTabKey(tab)}`,
    [getTabKey, rootId]
  );

  const getPanelId = useCallback(
    (tab: T) => `${rootId}-panel-${getTabKey(tab)}`,
    [getTabKey, rootId]
  );

  const findNext = useCallback(
    (index: number, direction: 1 | -1 = 1) => {
      const length = tabs.length;

      for (let i = 0; i <= tabs.length; ++i) {
        const targetIndex = (index + direction * i + length) % length;
        const targetTab = tabs[targetIndex];
        const targetKey = getTabKey(targetTab);

        if (!disabledKeys?.includes(targetKey))
          return { tab: tabs[targetIndex], index: targetIndex };
      }

      return null;
    },
    [disabledKeys, getTabKey, tabs]
  );

  return { getTabId, getPanelId, findNext };
};
