import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useId,
  useState,
} from "react";
import cx from "classnames";

import { useControlled } from "../__hooks/useControlled";

import s from "./Input.module.scss";

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "defaultValue" | "onChange" | "onBlur" | "onFocus"
> & {
  label: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  startContent?: ReactNode;
  endContent: ReactNode;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

export const Input = ({
  id: idProp,
  label,
  value: valueProp,
  defaultValue = "",
  error,
  startContent,
  endContent,
  isDisabled,
  onChange,
  onBlur,
  onFocus,
  ...props
}: Props) => {
  const inputId = useId();
  const id = idProp || inputId;
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;

  const [focused, setFocused] = useState(false);
  const [, value, setValue] = useControlled(valueProp, defaultValue);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { target } = event;

      setValue(target.value);
      onChange?.(target.value);
    },
    [onChange, setValue]
  );

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur?.();
  }, [onBlur]);

  const handleFocus = useCallback(() => {
    setFocused(true);
    onFocus?.();
  }, [onFocus]);

  const isLabelFloat = focused || value || startContent;

  return (
    <div
      className={cx(s.root, {
        [s.disabled]: isDisabled,
      })}
    >
      <div
        className={cx(s.wrapper, {
          [s.error]: !!error,
        })}
      >
        {startContent && <div className={s.startContent}>{startContent}</div>}
        <input
          {...props}
          type="text"
          tabIndex={isDisabled ? -1 : 0}
          aria-labelledby={labelId}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          disabled={isDisabled}
          id={id}
          className={s.input}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {endContent && <div className={s.endContent}>{endContent}</div>}
      </div>
      <label
        id={labelId}
        htmlFor={id}
        className={cx(s.label, {
          [s.float]: isLabelFloat,
          [s.error]: !!error,
        })}
      >
        {label}
      </label>
      {error && (
        <div id={errorId} className={s.errorMessage}>
          {error}
        </div>
      )}
    </div>
  );
};
