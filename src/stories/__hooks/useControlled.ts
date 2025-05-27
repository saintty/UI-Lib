import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import { isNil } from "../__utils/is-nil";

type ReturnValue<T> = [
  boolean,
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>
];

export const useControlled = <T>(
  externalValue?: T,
  defaultValue?: T
): ReturnValue<T> => {
  const [value, setValue] = useState(externalValue ?? defaultValue);

  const isControlled = useMemo(() => !isNil(externalValue), [externalValue]);

  useEffect(() => {
    if (!isNil(externalValue)) setValue(externalValue);
  }, [externalValue]);

  return [isControlled, value, setValue];
};
