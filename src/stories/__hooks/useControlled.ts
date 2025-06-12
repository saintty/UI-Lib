import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { isNil } from "../__utils/is-nil";

type ReturnValue<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

// TODO: Update parameter to accept init-callback fn for avoid infinite useEffect
export const useControlled = <T>(
  externalValue?: T,
  defaultValue?: T
): ReturnValue<T> => {
  const initialValueRef = useRef(externalValue);
  const initialDefaultValueRef = useRef(defaultValue);

  const [value, setValue] = useState(
    initialValueRef.current ?? initialDefaultValueRef.current
  );

  useEffect(() => {
    if (!isNil(externalValue)) setValue(externalValue);
  }, [externalValue]);

  return [value, setValue];
};
