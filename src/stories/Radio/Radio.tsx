import { ChangeEvent, InputHTMLAttributes, memo, useCallback } from "react";
import cx from "classnames";

import { useControlled } from "../__hooks/useControlled";

import s from "./Radio.module.scss";

type Props = DefaultProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> & {
    id: string;
    value: string;
    name: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (value: string) => void;
  };

export const Radio = memo(
  ({
    id,
    value,
    name,
    children,
    isChecked: isCheckedProp,
    defaultChecked,
    isDisabled,
    onChange,
    ...rest
  }: Props) => {
    const [isChecked, setIsChecked] = useControlled({
      value: isCheckedProp,
      defaultValue: !!defaultChecked,
    });

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = event.target;

        onChange?.(value);
        setIsChecked(checked);
      },
      [onChange, setIsChecked]
    );

    return (
      <div className={s.root}>
        <input
          id={id}
          className={cx(s.radio, {
            [s.disabled]: isDisabled,
            [s.checked]: isChecked,
          })}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={isDisabled ? undefined : handleChange}
          {...rest}
        />
        <label htmlFor={id} className={s.label}>
          {children}
        </label>
      </div>
    );
  }
);

Radio.displayName = "Radio";
