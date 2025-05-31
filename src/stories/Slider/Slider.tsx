import { KeyboardEvent, useCallback, useEffect, useId, useRef } from "react";

import { keyHandlers } from "./_constants";

import { clamp } from "../__utils/clamp";

import s from "./Slider.module.scss";
import { useControlled } from "../__hooks/useControlled";

type Props = {
  min: number;
  max: number;
  label: string;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
};

export const Slider = ({
  min,
  max,
  label,
  step = 1,
  defaultValue = min,
  value: valueProp,
  onChange,
}: Props) => {
  const labelId = useId();

  const [, value, setValue] = useControlled(valueProp, defaultValue);

  const trackRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);

  const percent = ((Number(value) - min) / (max - min)) * 100;

  const handleChangeValue = useCallback(
    (nextValue: number | ((prev?: number) => number)) => {
      if (typeof nextValue === "number") {
        const newValue = clamp(min, nextValue, max);

        setValue(newValue);
        onChange?.(newValue);
      } else {
        setValue((prev) => {
          const newValue = nextValue(prev);
          onChange?.(newValue);

          return prev;
        });
      }
    },
    [min, max, setValue, onChange]
  );

  const updateValueFromPosition = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const ratio = relativeX / rect.width;
      const rawValue = min + ratio * (max - min);
      const stepped = Math.round(rawValue / step) * step;

      handleChangeValue(stepped);
    },
    [min, max, step, handleChangeValue]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      if (keyHandlers.includes(key)) event.preventDefault();

      if (["ArrowLeft", "ArrowDown"].includes(key))
        handleChangeValue((prev) => clamp(min, Number(prev) - step, max));
      else if (["ArrowRight", "ArrowUp"].includes(key))
        handleChangeValue((prev) => clamp(min, Number(prev) + step, max));
      else if (key === "Home") handleChangeValue(min);
      else if (key === "End") handleChangeValue(max);
    },
    [handleChangeValue, min, max, step]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const clickPos = e.clientX - rect.left;
      const clickPercent = clickPos / rect.width;

      handleChangeValue(Math.round(min + clickPercent * (max - min)));
    },
    [max, min, handleChangeValue]
  );

  const handlePointerMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateValueFromPosition(clientX);
    },
    [updateValueFromPosition]
  );

  const stopDragging = useCallback(() => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handlePointerMove);
    document.removeEventListener("touchmove", handlePointerMove);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchend", stopDragging);
  }, [handlePointerMove]);

  const startDragging = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault();
      isDragging.current = true;

      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      updateValueFromPosition(clientX);

      document.addEventListener("mousemove", handlePointerMove);
      document.addEventListener("touchmove", handlePointerMove);
      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchend", stopDragging);
    },
    [updateValueFromPosition, handlePointerMove, stopDragging]
  );

  useEffect(() => () => stopDragging(), [stopDragging]);

  if (defaultValue < min || max < defaultValue) return;

  return (
    <div className={s.root}>
      <span id={labelId}>
        {label}: {value}
      </span>
      <div className={s.track} ref={trackRef} onClick={handleClick}>
        <div className={s.filled} style={{ width: `${percent}%` }} />
        <div
          className={s.thumb}
          role="slider"
          tabIndex={0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-labelledby={labelId}
          style={{ left: `${percent}%` }}
          onKeyDown={handleKeyDown}
          onMouseDown={startDragging}
          onTouchStart={startDragging}
        />
      </div>
    </div>
  );
};
