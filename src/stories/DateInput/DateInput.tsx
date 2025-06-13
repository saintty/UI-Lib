import React, { useState, useRef, useCallback, KeyboardEvent } from "react";
import { format } from "date-fns";

import { days } from "./_constants";

import { useClickOutside } from "../__hooks/useClickOutside";
import { useControlled } from "../__hooks/useControlled";

import { DateHeader } from "./DateHeader";
import { DateGrid } from "./DateGrid";
import { Input } from "../Input/Input";

import { ReactComponent as CalendarIcon } from "icons/calendar.svg";

import s from "./styles/DateInput.module.scss";

type Props = {
  label: string;
  closeOnSelect?: boolean;
  defaultDate?: Date;
  date?: Date;
  onSelect?: (date: Date) => void;
};

export const DateInput = ({
  label,
  closeOnSelect,
  date: dateProp,
  defaultDate,
  onSelect,
}: Props) => {
  const [selectedDate, setSelectedDate] = useControlled({
    value: dateProp,
    defaultValue: defaultDate,
  });
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusOnClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => inputRef.current?.focus());
  }, []);

  const handleSelect = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onSelect?.(date);

      if (closeOnSelect) handleFocusOnClose();
    },
    [closeOnSelect, onSelect, setSelectedDate, handleFocusOnClose]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") handleFocusOnClose();
    },
    [handleFocusOnClose]
  );

  useClickOutside([rootRef], handleFocusOnClose, isOpen);

  return (
    <div className={s.root} ref={rootRef}>
      <div className={s.trigger} onClick={() => setIsOpen((prev) => !prev)}>
        <Input
          label={label}
          className={s.input}
          aria-haspopup="dialog"
          aria-controls="calendar-dialog"
          aria-expanded={isOpen}
          ref={inputRef}
          value={selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""}
          endContent={<CalendarIcon className={s.icon} />}
          onKeyDown={(event) => {
            event.preventDefault();
            setIsOpen(true);
            popoverRef.current?.focus();
          }}
        />
      </div>
      {isOpen && (
        <div
          id="calendar-dialog"
          className={s.popover}
          role="dialog"
          aria-label={label}
          ref={popoverRef}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          <DateHeader
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
          <div className={s.weekdays}>
            {days.map((day) => (
              <div key={day} role="columnheader">
                {day}
              </div>
            ))}
          </div>
          <DateGrid
            currentMonth={currentMonth}
            selectedDate={selectedDate || null}
            setSelectedDate={handleSelect}
            setCurrentMonth={setCurrentMonth}
          />
        </div>
      )}
    </div>
  );
};
