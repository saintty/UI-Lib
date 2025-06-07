import cx from "classnames";
import { format } from "date-fns";
import React, { Dispatch, SetStateAction, useRef } from "react";

import { useDateActions } from "./_hooks";

import { ReactComponent as ChevronDouble } from "icons/chevron-double.svg";
import { ReactComponent as Chevron } from "icons/chevron.svg";

import s from "./styles/DateHeader.module.scss";

type Props = {
  currentMonth: Date;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
};

export const DateHeader = ({ currentMonth, setCurrentMonth }: Props) => {
  const { onNextMonth, onNextYear, onPrevMonth, onPrevYear } =
    useDateActions(setCurrentMonth);

  const rootRef = useRef<HTMLDivElement>(null);
  const prevYearRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={s.root} ref={rootRef}>
      <div className={s.nav}>
        <button
          ref={prevYearRef}
          className={s.button}
          aria-label="Предыдущий год"
          onClick={onPrevYear}
          tabIndex={0}
        >
          <ChevronDouble className={s.icon} />
        </button>
        <button
          className={s.button}
          aria-label="Предыдущий месяц"
          onClick={onPrevMonth}
        >
          <Chevron className={s.icon} />
        </button>
      </div>
      <div className={s.monthLabel}>{format(currentMonth, "MMMM yyyy")}</div>
      <div className={s.nav}>
        <button
          className={s.button}
          aria-label="Следующий месяц"
          onClick={onNextMonth}
        >
          <Chevron className={cx(s.icon, s.rotate)} />
        </button>
        <button
          className={s.button}
          aria-label="Следующий год"
          onClick={onNextYear}
        >
          <ChevronDouble className={cx(s.icon, s.rotate)} />
        </button>
      </div>
    </div>
  );
};
