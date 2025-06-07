import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const getDateKey = (date: Date) => date.toISOString();

export const chunks = <T>(arr: T[], batch: number) => {
  const result = [];

  for (let i = 0; i < arr.length; i += batch) {
    result.push(arr.slice(i, i + batch));
  }

  return result;
};

export const getWeeks = (currentMonth: Date) => {
  const weekStartsOn = 1;

  const startDate = startOfWeek(startOfMonth(currentMonth), { weekStartsOn });
  const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn });

  const totalDays = [];
  let current = startDate;

  while (current <= endDate) {
    totalDays.push(current);
    current = addDays(current, 1);
  }

  return chunks(totalDays, 7);
};
