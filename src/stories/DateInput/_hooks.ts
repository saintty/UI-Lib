import { Dispatch, SetStateAction, useCallback } from "react";
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  endOfMonth,
  startOfDay,
  startOfMonth,
  subDays,
  subMonths,
  subWeeks,
  subYears,
} from "date-fns";

export const useDateActions = (setDate: Dispatch<SetStateAction<Date>>) => {
  const onNextYear = useCallback(
    () => setDate((prev: Date) => addYears(prev, 1)),
    [setDate]
  );

  const onPrevYear = useCallback(
    () => setDate((prev: Date) => subYears(prev, 1)),
    [setDate]
  );

  const onNextMonth = useCallback(
    () => setDate((prev: Date) => addMonths(prev, 1)),

    [setDate]
  );

  const onPrevMonth = useCallback(
    () => setDate((prev: Date) => subMonths(prev, 1)),
    [setDate]
  );

  const onNextWeek = useCallback(
    () => setDate((prev: Date) => addWeeks(prev, 1)),
    [setDate]
  );

  const onPrevWeek = useCallback(
    () => setDate((prev: Date) => subWeeks(prev, 1)),
    [setDate]
  );

  const onNextDay = useCallback(
    () => setDate((prev: Date) => addDays(prev, 1)),
    [setDate]
  );

  const onPrevDay = useCallback(
    () => setDate((prev: Date) => subDays(prev, 1)),
    [setDate]
  );

  const onFirstDay = useCallback(
    () => setDate((prev) => startOfMonth(prev)),
    [setDate]
  );

  const onLastDay = useCallback(
    () => setDate((prev) => startOfDay(endOfMonth(prev))),
    [setDate]
  );

  return {
    onNextMonth,
    onPrevMonth,
    onNextYear,
    onPrevYear,
    onNextDay,
    onPrevDay,
    onNextWeek,
    onPrevWeek,
    onFirstDay,
    onLastDay,
  };
};
