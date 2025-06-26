import cx from "classnames";
import { createPortal } from "react-dom";
import { useRef, KeyboardEvent, memo, useEffect } from "react";

import { useClickOutside } from "../__hooks/useClickOutside";
import { useFocusTrap } from "../__hooks/useFocusTrap";

import s from "./Drawer.module.scss";

type Props = DefaultProps & {
  label?: string;
  withPortal?: boolean;
  position?: "left" | "right" | "bottom";
  onClose: () => void;
};

export const Drawer = memo(
  ({
    children,
    label,
    withPortal = true,
    position = "right",
    onClose,
  }: Props) => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    const { focusNext } = useFocusTrap(drawerRef);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "Tab") focusNext(event);
    };

    useClickOutside([drawerRef], onClose);

    useEffect(() => {
      drawerRef.current?.focus();
    }, []);

    const renderContent = (
      <div className={s.root} ref={rootRef} aria-hidden={!open}>
        <div
          className={cx(s.drawer, s[position])}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          ref={drawerRef}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          {children}
        </div>
      </div>
    );

    return withPortal
      ? createPortal(renderContent, document.body)
      : renderContent;
  }
);

Drawer.displayName = "Drawer";
