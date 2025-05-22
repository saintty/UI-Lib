import { FC, memo } from "react";
import cx from "classnames";

import { Size } from "../types";

import s from "./Spinner.module.scss";

type Variant = "lines" | "dots";

type Props = DefaultProps & {
  size?: Size;
  color?: string;
  variant?: Variant;
};

export const LinesSpinner = ({
  size = "sm",
  color,
}: Omit<Props, "variant">) => {
  const lines = Array.from({ length: 12 });

  const classNames = cx(s.root, {
    [s.md]: size === "md",
    [s.lg]: size === "lg",
  });

  return (
    <div className={classNames}>
      {lines.map((_, i) => (
        <span key={i} className={s.line} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

export const DotsSpinner = ({ color, size }: Omit<Props, "variant">) => {
  const dots = Array.from({ length: 6 });

  const classNames = cx(s.root, {
    [s.md]: size === "md",
    [s.lg]: size === "lg",
  });

  return (
    <div className={classNames}>
      {dots.map((_, i) => (
        <span key={i} className={s.dot} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

const SpinnerComponent: Record<Variant, FC<Props>> = {
  dots: DotsSpinner,
  lines: LinesSpinner,
};

export const Spinner = memo(({ variant = "lines", ...props }: Props) => {
  const Component = SpinnerComponent[variant];

  return (
    <div role="status" aria-live="polite">
      <span hidden>Идет загрузка</span>
      <Component {...props} />
    </div>
  );
});

Spinner.displayName = "Spinner";
