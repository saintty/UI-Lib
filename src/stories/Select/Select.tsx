import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import cx from "classnames";

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

import s from "./Select.module.scss";

export type Props = Omit<PListBox, "label"> & {
  label: string;
  isLoading?: boolean;
  error?: string;
};

export const Select = ({
  label,
  defaultOptions,
  selectedOptions: selectedOptionsProp,
  isMultiple,
  isLoading,
  error,
  getKey,
  getTitle,
  onChange,
  ...props
}: Props) => {
  const listBoxId = useId();

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

  const inputValue = Array.from(selectedOptions || [])
    .reduce<string[]>((acc, curr) => [...acc, getTitle(curr)], [])
    .join(", ");

  const handleChange = useCallback(
    (options: Set<ListBoxOption>) => {
      setSelectedOptions([...options]);
      onChange?.(options);

      if (!isMultiple) handleClose();
    },
    [handleClose, isMultiple, onChange, setSelectedOptions]
  );

  const handleToggle = useCallback(
    () =>
      setOpen((prev) => {
        if (prev) inputRef.current?.focus();
        return !prev;
      }),
    []
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    },
    [handleClose]
  );

  useClickOutside([rootRef], () => setOpen(false));
  useFocusOut(listboxRef, () => setOpen(false));

  useEffect(() => {
    if (isOpen) {
      const listBox = rootRef.current?.querySelector(`#${listBoxId}`);
      if (listBox instanceof HTMLElement) listBox.focus();
    }
  }, [isOpen, listBoxId]);

  return (
    <div className={s.root} ref={rootRef}>
      <div className={s.trigger} onClick={handleToggle}>
        <Input
          ref={inputRef}
          label={label}
          error={error}
          value={inputValue}
          className={s.input}
          aria-expanded={isOpen}
          role="combobox"
          aria-haspopup="listbox"
          aria-controls={listBoxId}
          aria-autocomplete="none"
          aria-readonly="true"
          readOnly
          onKeyDown={(event) => {
            event.preventDefault();
            setOpen(true);
          }}
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
            isMultiple={isMultiple}
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
