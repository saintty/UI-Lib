import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { isNil } from "../__utils/isNill";
import { getNextIndex, getPrevIndex, keyDownHandlerKeys } from "./utils";

import { ListBoxItem } from "./ListBoxItem";

import s from "./ListBox.module.scss";

export interface ListBoxOption {
  id: string;
  title: string;
  value: string;
}

export interface Props {
  options: ListBoxOption[];
  defaultOptions?: ListBoxOption[];
  dependentOptions?: ListBoxOption[];
  disabledOptions?: ListBoxOption[];
  label?: string;
  isMultiple?: boolean;
  getKey: (option: ListBoxOption) => string;
  getTitle: (option: ListBoxOption) => string;
  onChange?: (options: Set<ListBoxOption>) => void;
}

export const ListBox = ({
  options,
  label,
  isMultiple,
  defaultOptions,
  dependentOptions,
  disabledOptions,
  getKey,
  getTitle,
  onChange,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Set<ListBoxOption>>(
    defaultOptions ? new Set(defaultOptions) : new Set()
  );

  const rootRef = useRef<HTMLUListElement>(null);
  const selectedOptionsRef = useRef<ListBoxOption[]>([...selectedOptions]);
  const ariaLiveMessage = useRef("");

  const handleClick = useCallback(
    (option: ListBoxOption) => {
      setSelectedOptions((prev) => {
        let newState = new Set<ListBoxOption>();
        const alreadySelect = prev.has(option);

        if (alreadySelect) {
          prev.delete(option);

          newState = new Set(prev);
        } else if (isMultiple) newState = new Set(prev.add(option));
        else newState = new Set([option]);

        ariaLiveMessage.current = alreadySelect
          ? `Удален элемент ${getTitle(option)}`
          : `Выбран элемент ${getTitle(option)}`;

        onChange?.(newState);

        selectedOptionsRef.current = [...newState];
        return newState;
      });
    },
    [getTitle, isMultiple, onChange]
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

  useEffect(() => {
    if (!isNil(dependentOptions)) setSelectedOptions(new Set(dependentOptions));
  }, [dependentOptions]);

  const activeDescendant =
    activeIndex !== null ? getKey(options[activeIndex]) : undefined;

  return (
    <div>
      {ariaLiveMessage.current && (
        <div hidden aria-live="polite" aria-atomic="false">
          {ariaLiveMessage.current}
        </div>
      )}
      <ul
        role="listbox"
        className={s.root}
        tabIndex={0}
        ref={rootRef}
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
      </ul>
    </div>
  );
};
