import { KeyboardEvent, ReactNode, useCallback, useRef } from "react";
import cx from "classnames";

import { useControlled } from "../__hooks/useControlled";
import { useInitial } from "../__hooks/useInitial";
import { useTabs } from "./hooks/useTabs";

import s from "./Tabs.module.scss";

type Props<T> = {
  tabs: T[];
  selectedKey?: string;
  disabledKeys?: string[];
  onSelect?: (tab: T) => void;
  getTabKey: (tab: T) => string;
  getTabTitle: (tab: T) => ReactNode;
  getTabPanel: (tab: T) => ReactNode;
};

export const Tabs = <T,>({
  tabs,
  selectedKey: selectedKeyProp,
  disabledKeys,
  onSelect,
  getTabKey,
  getTabTitle,
  getTabPanel,
}: Props<T>) => {
  const { getPanelId, getTabId, findNext } = useTabs({
    tabs,
    disabledKeys,
    getTabKey,
  });

  const [, selectedKey, setSelected] = useControlled(
    selectedKeyProp,
    tabs.length > 0 ? getTabKey(tabs[0]) : ""
  );

  const selectedIndex = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const renderTab = useCallback(
    (tab: T, selectedKey: string, index: number) => {
      const id = getTabId(tab);
      const controlsId = getPanelId(tab);
      const isSelected = selectedKey === getTabKey(tab);
      const isDisabled = disabledKeys?.includes(getTabKey(tab)) || false;

      const onClick = () => {
        setSelected(getTabKey(tab));
        onSelect?.(tab);

        selectedIndex.current = index;
      };

      return (
        <button
          role="tab"
          type="button"
          className={cx(s.tab, {
            [s.disabled]: isDisabled,
            [s.selected]: isSelected,
          })}
          id={id}
          aria-selected={isSelected}
          aria-controls={controlsId}
          aria-disabled={isDisabled}
          tabIndex={isSelected ? 0 : -1}
          onClick={!isDisabled ? onClick : undefined}
        >
          {getTabTitle(tab)}
        </button>
      );
    },
    [
      disabledKeys,
      getPanelId,
      getTabId,
      getTabKey,
      getTabTitle,
      onSelect,
      setSelected,
    ]
  );

  const renderPanel = useCallback(
    (tab: T, selectedKey: string) => {
      const id = getPanelId(tab);
      const labelId = getTabId(tab);
      const isHidden = selectedKey !== getTabKey(tab);

      return (
        <div
          id={id}
          className={s.panel}
          role="tabpanel"
          aria-labelledby={labelId}
          hidden={isHidden}
        >
          {getTabPanel(tab)}
        </div>
      );
    },
    [getPanelId, getTabId, getTabKey, getTabPanel]
  );

  const focusTab = useCallback(
    (start: number, direction: 1 | -1 = 1) => {
      const nextTab = findNext(start, direction);

      if (!nextTab) return;

      const { index, tab } = nextTab;
      setSelected(getTabKey(tab));
      onSelect?.(tab);

      selectedIndex.current = index;
      const tabNode = rootRef.current?.querySelector(`#${getTabId(tab)}`);

      if (tabNode instanceof HTMLElement) tabNode.focus();
    },
    [findNext, getTabId, getTabKey, onSelect, setSelected]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const length = tabs.length;
      const current = selectedIndex.current;

      if (event.key === "Home") focusTab(0);
      else if (event.key === "End") focusTab(length - 1, -1);
      else if (event.key === "ArrowRight") focusTab(current + 1);
      else if (event.key === "ArrowLeft") focusTab(current - 1, -1);
    },
    [focusTab, tabs.length]
  );

  useInitial(() => {
    const selectedTabIndex = tabs.findIndex(
      (tab) => getTabKey(tab) === selectedKey
    );

    selectedIndex.current = selectedTabIndex === -1 ? 0 : selectedTabIndex;
  });

  return (
    <div
      ref={rootRef}
      className={s.root}
      role="tablist"
      aria-orientation="horizontal"
      onKeyDown={handleKeyDown}
    >
      <div className={s.tabs}>
        {tabs.map((tab, index) => renderTab(tab, selectedKey || "", index))}
      </div>
      <div className={s.panels}>
        {tabs.map((tab) => renderPanel(tab, selectedKey || ""))}
      </div>
    </div>
  );
};
