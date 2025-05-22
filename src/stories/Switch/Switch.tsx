import { useCallback, useId } from "react";
import cx from "classnames";

import { useKeyDown } from "../__hooks/useKeyDown";
import { useControlled } from "../__hooks/useControlled";

import s from "./Switch.module.scss";

type Props = DefaultProps & {
  id?: string;
  defaultChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
};

export const Switch = ({
  id: checkboxIdProp,
  isChecked: isCheckedProp,
  isDisabled,
  defaultChecked,
  children,
  onChange,
}: Props) => {
  const checkboxId = useId();

  const [, isChecked, setIsChecked] = useControlled(
    isCheckedProp,
    defaultChecked
  );

  const handleChange = useCallback(() => {
    setIsChecked((prev) => {
      onChange?.(!prev);

      return !prev;
    });
  }, [setIsChecked, onChange]);

  const handleKeyDown = useKeyDown(isDisabled ? undefined : handleChange);

  return (
    <div className={s.root}>
      <input
        type="checkbox"
        className={s.input}
        id={checkboxIdProp || checkboxId}
        checked={isChecked}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        onChange={handleChange}
        aria-label={children ? undefined : "Переключить"}
      />
      <label
        htmlFor={checkboxIdProp || checkboxId}
        className={cx(s.label, { [s.disabled]: isDisabled })}
      >
        <div
          className={cx(s.track, {
            [s.checked]: isChecked,
            [s.disabled]: isDisabled,
          })}
        >
          <div className={cx(s.thumb, { [s.checked]: isChecked })} />
        </div>
        {children}
      </label>
    </div>
  );
};
