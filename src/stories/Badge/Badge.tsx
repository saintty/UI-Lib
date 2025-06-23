import { memo, ReactNode } from "react";
import cx from "classnames";

import s from "./Badge.module.scss";

type Props = {
  content: ReactNode;
  visuallyHidden?: boolean;
  decorative?: boolean;
  className?: string;
  ariaLabel?: string;
};

export const Badge = memo(
  ({
    content,
    visuallyHidden = false,
    decorative = false,
    className,
    ariaLabel,
  }: Props) => {
    const isHidden = visuallyHidden;
    const isDecorative = decorative;

    return (
      <span
        className={cx(s.root, className, {
          [s.hidden]: isHidden,
        })}
        aria-hidden={isDecorative ? "true" : undefined}
        aria-label={!isDecorative && ariaLabel ? ariaLabel : undefined}
      >
        {content}
      </span>
    );
  }
);

Badge.displayName = "Badge";
