import React, { useCallback, KeyboardEvent } from "react";
import cx from "classnames";

import { keyHandlers } from "./_constants";

import { useControlled } from "../__hooks/useControlled";

import { array } from "../__utils/array";

import s from "./Rating.module.scss";

type Props = {
  label?: string;
  max?: number;
  value?: number;
  defaultValue?: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
};

export const Rating = ({
  label = "Rating",
  max = 5,
  value: valueProp,
  defaultValue: defaultValueProp = 3,
  readOnly = false,
  onChange,
}: Props) => {
  const [value, setValue] = useControlled({
    value: valueProp,
    defaultValue: defaultValueProp,
  });

  const handleSelect = useCallback(
    (newValue: number) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [setValue, onChange]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (readOnly || typeof value !== "number") return;

      if (keyHandlers.includes(event.key)) event.preventDefault();

      if (event.key === "ArrowRight" || event.key === "ArrowUp")
        handleSelect(Math.min(max, value + 1));
      else if (event.key === "ArrowLeft" || event.key === "ArrowDown")
        handleSelect(Math.max(1, value - 1));
    },
    [readOnly, value, handleSelect, max]
  );

  return (
    <div role="radiogroup" className={s.wrapper} aria-label={label}>
      {array(max, (_, i) => {
        const starValue = i + 1;
        const isSelected = starValue === value;
        const isFilled = typeof value === "number" && starValue <= value;

        return (
          <div
            key={starValue}
            role="radio"
            tabIndex={isSelected ? 0 : -1}
            aria-checked={isSelected}
            aria-label={`${starValue} ${starValue === 1 ? "star" : "stars"}`}
            className={cx(s.star, {
              [s.filled]: isFilled,
              [s.readOnly]: readOnly,
            })}
            onClick={readOnly ? undefined : () => handleSelect(starValue)}
            onKeyDown={handleKeyDown}
          >
            ★
          </div>
        );
      })}
    </div>
  );
};
