import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { isNil } from "../__utils/is-nil";

type ReturnValue<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

export const useControlled = <T>(
  externalValue?: T,
  defaultValue?: T
): ReturnValue<T> => {
  const [value, setValue] = useState(externalValue ?? defaultValue);

  useEffect(() => {
    if (!isNil(externalValue)) setValue(externalValue);
  }, [externalValue]);

  return [value, setValue];
};
