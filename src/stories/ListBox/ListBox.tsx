import React, {
  forwardRef,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import cx from "classnames";

import { useScrollEnd } from "../__hooks/useScrollEnd";
import { useControlled } from "../__hooks/useControlled";
import { useScrollShadow } from "../__hooks/useScrollShadow";

import { isNil } from "../__utils/is-nil";
import { mergeRefs } from "../__utils/merge-refs";
import {
  getNextIndex,
  getPrevIndex,
  keyDownHandlerKeys,
  transform,
} from "./_utils";

import { ListBoxItem } from "./ListBoxItem";

import s from "./ListBox.module.scss";

export type ListBoxOption = {
  id: string;
  title: string;
  value: string;
};

export type Props = {
  id?: string;
  options: ListBoxOption[];
  defaultOptions?: ListBoxOption[];
  selectedOptions?: ListBoxOption[];
  disabledOptions?: ListBoxOption[];
  label?: string;
  isMultiple?: boolean;
  getKey: (option: ListBoxOption) => string;
  getTitle: (option: ListBoxOption) => string;
  onChange?: (options: Set<ListBoxOption>) => void;
  onScrollEnd?: () => void;
};

export const ListBox = forwardRef<HTMLUListElement, Props>(
  (
    {
      id,
      options,
      label,
      isMultiple,
      defaultOptions,
      selectedOptions: selectedOptionsProp,
      disabledOptions,
      getKey,
      getTitle,
      onChange,
      onScrollEnd,
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedOptions, setSelectedOptions] = useControlled({
      value: selectedOptionsProp,
      defaultValue: defaultOptions,
      transform,
    });

    const rootRef = useRef<HTMLUListElement>(null);
    const selectedOptionsRef = useRef<ListBoxOption[]>(
      Array.from(selectedOptions || [])
    );
    const ariaLiveMessage = useRef("");

    const handleClick = useCallback(
      (option: ListBoxOption) => {
        let newState = new Set<ListBoxOption>();

        setSelectedOptions((prev) => {
          if (!prev) return;

          const alreadySelect = prev.has(option);

          if (alreadySelect) {
            prev.delete(option);

            newState = new Set(prev);
          } else if (isMultiple) newState = new Set(prev.add(option));
          else newState = new Set([option]);

          ariaLiveMessage.current = alreadySelect
            ? `Удален элемент ${getTitle(option)}`
            : `Выбран элемент ${getTitle(option)}`;

          selectedOptionsRef.current = [...newState];
          return newState;
        });
        onChange?.(newState);
      },
      [getTitle, isMultiple, onChange, setSelectedOptions]
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (!rootRef.current || options.length === 0) return;

        const { key } = event;

        if (keyDownHandlerKeys.includes(key)) event.preventDefault();
        if (key === "Escape") setActiveIndex(null);
        if (key === "Home") setActiveIndex(0);
        if (key === "End") setActiveIndex(options.length - 1);

        if (key === "ArrowDown")
          setActiveIndex((prev) => getNextIndex(prev, options.length));

        if (key === "ArrowUp")
          setActiveIndex((prev) => getPrevIndex(prev, options.length));

        const selectKey = key === "Enter" || (isMultiple && key === " ");
        if (selectKey && !isNil(activeIndex)) handleClick(options[activeIndex]);
      },
      [options, isMultiple, activeIndex, handleClick]
    );

    const handleBlur = useCallback(() => setActiveIndex(null), []);

    useEffect(() => {
      if (!rootRef.current || activeIndex === null) return;

      const items = rootRef.current.querySelectorAll("[role='option']");
      items[activeIndex].scrollIntoView({ block: "nearest" });
    }, [activeIndex]);

    useScrollEnd({ ref: rootRef, fn: onScrollEnd });
    const { bottomShadow, topShadow } = useScrollShadow(rootRef);

    const activeDescendant =
      activeIndex !== null ? getKey(options[activeIndex]) : undefined;

    return (
      <div className={s.root}>
        {ariaLiveMessage.current && (
          <div hidden aria-live="polite" aria-atomic="false">
            {ariaLiveMessage.current}
          </div>
        )}
        <div className={cx(s.topShadow, { [s.visible]: topShadow })} />
        <div className={cx(s.bottomShadow, { [s.visible]: bottomShadow })} />
        <ul
          role="listbox"
          id={id}
          className={s.list}
          tabIndex={0}
          ref={mergeRefs(rootRef, ref)}
          aria-label={label}
          aria-activedescendant={activeDescendant}
          aria-multiselectable={isMultiple}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        >
          {options.map((option, index) => {
            const isSelected = !!selectedOptionsRef.current.find(
              (selectedOption) => getKey(selectedOption) === getKey(option)
            );
            const isDisabled = !!disabledOptions?.find(
              (disabledOption) => getKey(disabledOption) === getKey(option)
            );
            const isActive = index === activeIndex;

            return (
              <ListBoxItem
                id={getKey(option)}
                item={option}
                key={getKey(option)}
                title={getTitle(option)}
                onClick={handleClick}
                isActive={isActive}
                isDisabled={isDisabled}
                isSelected={isSelected}
              />
            );
          })}
          {options.length === 0 && (
            <div className={s.empty}>Не найдено элементов</div>
          )}
        </ul>
      </div>
    );
  }
);

ListBox.displayName = "ListBox";
