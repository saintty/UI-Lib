import { useEffect } from "react";

import { isNil } from "../__utils/is-nil";

export const useImaskSync = <T>(
  value: T,
  unmaskedValue: string,
  setValue: (value: string) => void
) => {
  useEffect(() => {
    if (!isNil(value) && String(value) !== unmaskedValue)
      setValue(String(value));
  }, [setValue, unmaskedValue, value]);
};
