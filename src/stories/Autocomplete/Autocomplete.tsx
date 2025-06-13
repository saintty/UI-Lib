import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import cx from "classnames";

import { useSearch } from "../__hooks/useSearch";
import { useFocusOut } from "../__hooks/useFocusOut";
import { useControlled } from "../__hooks/useControlled";
import { useClickOutside } from "../__hooks/useClickOutside";

import {
  ListBox,
  ListBoxOption,
  Props as PListBox,
} from "./../ListBox/ListBox";
import { Input } from "../Input/Input";
import { Spinner } from "../Spinner/Spinner";

import { ReactComponent as ChevronIcon } from "icons/chevron.svg";

import s from "./Autocomplete.module.scss";

export type Props = Omit<PListBox, "label" | "isMultiple"> & {
  label: string;
  isLoading?: boolean;
  error?: string;
  getItems: (search: string) => ListBoxOption[] | Promise<ListBoxOption[]>;
};

export const Autocomplete = ({
  label,
  defaultOptions,
  selectedOptions: selectedOptionsProp,
  isLoading,
  error,
  getKey,
  getTitle,
  onChange,
  getItems,
  ...props
}: Props) => {
  const listBoxId = useId();

  const { value, search, onSearchReset, onSearchChange } = useSearch();

  const [isOpen, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useControlled({
    defaultValue: defaultOptions,
    value: selectedOptionsProp,
  });

  const handleClose = useCallback(() => {
    inputRef.current?.focus();
    setOpen(false);
  }, []);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const handleChange = useCallback(
    (options: Set<ListBoxOption>) => {
      const optionsArray = [...options];

      setSelectedOptions(optionsArray);
      onChange?.(options);
      handleClose();

      const firstOption = optionsArray[0];
      onSearchReset(getTitle(firstOption));
    },
    [getTitle, handleClose, onChange, onSearchReset, setSelectedOptions]
  );

  const handleToggle = useCallback(() => setOpen(true), []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    },
    [handleClose]
  );

  useClickOutside([rootRef], () => setOpen(false));
  useFocusOut(listboxRef, () => setOpen(false));

  useEffect(() => {
    getItems(search);
  }, [getItems, search]);

  useEffect(() => {
    const isEmptySearch = value.trim().length === 0;
    const hasSelectedBySearch = selectedOptions?.some(
      (item) => getTitle(item) === value
    );

    if (!isOpen && !isEmptySearch && !hasSelectedBySearch) onSearchReset();
  }, [getTitle, isOpen, onSearchReset, selectedOptions, value]);

  return (
    <div className={s.root} ref={rootRef}>
      <div className={s.trigger} onClick={handleToggle}>
        <Input
          ref={inputRef}
          label={label}
          error={error}
          value={value}
          onChange={onSearchChange}
          className={s.input}
          aria-expanded={isOpen}
          role="combobox"
          aria-haspopup="listbox"
          aria-controls={listBoxId}
          endContent={
            <div className={s.endContent}>
              {isLoading && <Spinner size="sm" variant="dots" />}
              <ChevronIcon className={cx(s.icon, { [s.open]: isOpen })} />
            </div>
          }
        />
      </div>
      {isOpen && (
        <div
          className={s.options}
          tabIndex={-1}
          ref={optionsRef}
          onKeyDown={handleKeyDown}
        >
          <ListBox
            {...props}
            id={listBoxId}
            ref={listboxRef}
            label={label}
            defaultOptions={defaultOptions}
            selectedOptions={selectedOptions}
            getKey={getKey}
            getTitle={getTitle}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};
