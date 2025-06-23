import { useId } from "react";

import s from "./Meter.module.scss";

type Props = {
  min: number;
  max: number;
  now: number;
  title?: string;
};

export const Meter = ({ max, min, now, title }: Props) => {
  const labelId = useId();
  const perCent = (((now - min) / (max - min)) * 100).toFixed(1);
  const complexTitle = `${title}: ${perCent}%`;

  if (now > max || now < min) return;

  return (
    <div>
      {title && <span id={labelId}>{complexTitle}</span>}
      <div
        role="meter"
        aria-labelledby={labelId}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={now}
        aria-valuetext={complexTitle}
        className={s.meter}
      >
        <div
          className={s.fill}
          style={{ width: `${perCent}%`, padding: now !== min ? 10 : 0 }}
        />
      </div>
    </div>
  );
};
