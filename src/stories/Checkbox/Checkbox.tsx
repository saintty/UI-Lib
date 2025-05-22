import { useCallback, useId } from "react";
import cx from "classnames";

import { useKeyDown } from "../__hooks/useKeyDown";
import { useControlled } from "../__hooks/useControlled";

import s from "./Checkbox.module.scss";

type Props = {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({
  label,
  checked: checkedProp,
  defaultChecked = false,
  isDisabled = false,
  errorMessage = "",
  onChange,
}: Props) => {
  const labelId = useId();
  const errorMessageId = useId();

  const [, isChecked, setChecked] = useControlled(checkedProp, defaultChecked);

  const handleToggle = useCallback(() => {
    setChecked((prev) => {
      onChange?.(!prev);
      return !prev;
    });
  }, [setChecked, onChange]);

  const handleKeyDown = useKeyDown(isDisabled ? undefined : handleToggle);

  return (
    <div>
      <div
        role="checkbox"
        tabIndex={isDisabled ? -1 : 0}
        className={cx(s.root, { [s.disabled]: isDisabled })}
        aria-checked={isChecked}
        aria-invalid={errorMessage ? "true" : undefined}
        aria-disabled={isDisabled ? "true" : undefined}
        aria-labelledby={labelId}
        aria-describedby={errorMessage && errorMessageId}
        onClick={isDisabled ? undefined : handleToggle}
        onKeyDown={handleKeyDown}
      >
        <div
          className={cx(s.box, {
            [s.checked]: isChecked,
            [s.invalid]: errorMessage,
          })}
        />
        <span className={s.label} id={labelId}>
          {label}
        </span>
      </div>
      {errorMessage && (
        <div id={errorMessageId} className={s.error}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
