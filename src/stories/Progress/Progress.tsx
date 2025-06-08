import React, { useId } from "react";

import { clamp } from "../__utils/clamp";

import s from "./Progress.module.scss";

type Props = {
  value: number;
  max: number;
  label: string;
};

export const Progress = ({ value, max, label }: Props) => {
  const labelId = useId();

  const percent = ((clamp(0, value, max) / max) * 100).toFixed(2);

  return (
    <div
      className={s.root}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-labelledby={labelId}
    >
      <div className={s.track}>
        <div className={s.fill} style={{ width: `${percent}%` }} />
      </div>
      {label && (
        <div className={s.label} id={labelId}>
          {label}
        </div>
      )}
    </div>
  );
};
