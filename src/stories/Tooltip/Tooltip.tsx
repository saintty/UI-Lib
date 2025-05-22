import { ReactNode, useCallback, useId, useRef, useState } from "react";
import cx from "classnames";

import s from "./Tooltip.module.scss";

type Props = {
  children: ReactNode;
  content?: ReactNode;
  delay?: number;
};

const defaultDelay = 300;

export const Tooltip = ({ children, content, delay = defaultDelay }: Props) => {
  const tooltipId = useId();

  const [isVisible, setVisible] = useState(false);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return (
    <div
      className={s.root}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div
        tabIndex={0}
        aria-describedby={tooltipId}
        className={s.trigger}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>

      <div
        role="tooltip"
        id={tooltipId}
        className={cx(s.tooltip, { [s.visible]: isVisible })}
        aria-hidden={!isVisible}
      >
        {content}
      </div>
    </div>
  );
};
