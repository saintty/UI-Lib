import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cx from "classnames";
import { isSameMonth, isSameDay } from "date-fns";

import { keyHandlers } from "./_constants";

import { useDateActions } from "./_hooks";

import { getDateKey, getWeeks } from "./_utils";

import s from "./styles/DateGrid.module.scss";

type Props = {
  selectedDate: Date | null;
  currentMonth: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
};

export const DateGrid = ({
  selectedDate,
  currentMonth,
  setSelectedDate,
  setCurrentMonth,
}: Props) => {
  const [focusedDate, setFocused] = useState(selectedDate || new Date());

  const {
    onLastDay,
    onFirstDay,
    onNextDay,
    onPrevDay, 
    onNextWeek,
    onPrevWeek,
    onPrevMonth,
    onNextMonth,
  } = useDateActions(setFocused);

  const rootRef = useRef<HTMLDivElement>(null);

  const weeks = useMemo(() => getWeeks(currentMonth), [currentMonth]);

  const renderWeek = useCallback(
    (week: Date[], weekIndex: number) => (
      <div key={weekIndex} className={s.week} role="row">
        {week.map((day) => {
          const isFocused = isSameDay(day, focusedDate);
          const isSelected = !!selectedDate && isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const dateKey = getDateKey(day);

          return (
            <div key={dateKey} role="gridcell" aria-selected={isSelected}>
              <button
                id={dateKey}
                data-id={dateKey}
                type="button"
                disabled={!isCurrentMonth}
                className={cx(s.day, {
                  [s.selected]: isSelected,
                  [s.outside]: !isCurrentMonth,
                  [s.focused]: isFocused && !isSelected,
                })}
                onClick={() => setSelectedDate(day)}
              >
                {day.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    ),
    [currentMonth, focusedDate, selectedDate, setSelectedDate]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const { key } = event;

      if (keyHandlers.includes(key)) event.preventDefault();

      if (key === "ArrowUp") onPrevWeek();
      else if (key === "ArrowDown") onNextWeek();
      else if (key === "ArrowRight") onNextDay();
      else if (key === "ArrowLeft") onPrevDay();
      else if (key === "PageUp") onPrevMonth();
      else if (key === "PageDown") onNextMonth();
      else if (key === "Home") onFirstDay();
      else if (key === "End") onLastDay();
      else if (key === "Enter" || key === " ") setSelectedDate(focusedDate);
    },
    [
      focusedDate,
      onFirstDay,
      onLastDay,
      onNextDay,
      onNextMonth,
      onNextWeek,
      onPrevDay,
      onPrevMonth,
      onPrevWeek,
      setSelectedDate,
    ]
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const target = root.querySelector(`[data-id="${getDateKey(focusedDate)}"]`);
    if (target instanceof HTMLElement) target.focus();
  }, [currentMonth, focusedDate]);

  useEffect(() => {
    if (!isSameMonth(focusedDate, currentMonth)) setCurrentMonth(focusedDate);
  }, [currentMonth, focusedDate, setCurrentMonth]);

  return (
    <div
      ref={rootRef}
      className={s.root}
      role="grid"
      aria-activedescendant={getDateKey(focusedDate)}
      onKeyDown={handleKeyDown}
    >
      <span hidden>Календарь для выбора даты</span>
      {weeks.map((week, index) => renderWeek(week, index))}
    </div>
  );
};
