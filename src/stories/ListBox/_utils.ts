import { isNil } from "../__utils/is-nil";
import { ListBoxOption } from "./ListBox";

export const keyDownHandlerKeys = [
  "ArrowDown",
  "ArrowUp",
  "Enter",
  "Home",
  "End",
  "Esc",
  " ",
];

export const getNextIndex = (current: number | null, length: number) =>
  isNil(current) ? 0 : (current + 1) % length;

export const getPrevIndex = (current: number | null, length: number) =>
  isNil(current) ? length - 1 : (current - 1 + length) % length;

export const transform = (options?: ListBoxOption[]) => new Set(options);
