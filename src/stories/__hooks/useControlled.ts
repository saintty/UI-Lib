import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { isNil } from "../__utils/is-nil";

type ReturnValue<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

type UseControllerHook<T> = {
  value?: T;
  defaultValue?: T;
  shouldUpdate?: boolean;
};

type UseControllerHookWithTransform<T, P = T> = UseControllerHook<T> & {
  transform?: (value?: T) => P;
};

export function useControlled<T>(options: UseControllerHook<T>): ReturnValue<T>;

export function useControlled<T, P>(
  options: UseControllerHookWithTransform<T, P>
): ReturnValue<P>;

export function useControlled<T, P = T>({
  defaultValue,
  value: valueProp,
  shouldUpdate,
  transform,
}: UseControllerHookWithTransform<T, P>) {
  const initialValueRef = useRef(transform?.(valueProp) ?? valueProp);
  const initialDefaultValueRef = useRef(
    transform?.(defaultValue) ?? defaultValue
  );

  const [value, setValue] = useState(
    initialValueRef.current ?? initialDefaultValueRef.current
  );

  useEffect(() => {
    if (!shouldUpdate) return;

    if (!isNil(valueProp)) setValue(transform?.(valueProp) ?? valueProp);
  }, [valueProp, transform, shouldUpdate]);

  return [value, setValue];
}
