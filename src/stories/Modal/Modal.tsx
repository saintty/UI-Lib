import React, {
  useRef,
  ReactNode,
  KeyboardEvent,
  useCallback,
  useId,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

import { useClickOutside } from "../__hooks/useClickOutside";

import { getFocusableElements } from "./_helpers";

import s from "./Modal.module.scss";
import { lockScroll, unlockScroll } from "../__utils/scroll";

type Props = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  withPortal?: boolean;
  onClose: () => void;
};

export const ModalWrapper = ({
  title,
  children,
  withPortal = false,
  onClose,
}: Omit<Props, "isOpen">) => {
  const titleId = useId();

  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") return onClose();

      if (event.key === "Tab") {
        const focusable = getFocusableElements(contentRef.current!);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const goingForward = !event.shiftKey;
        const active = document.activeElement;

        if (goingForward && active === last) {
          event.preventDefault();
          first.focus();
        } else if (!goingForward && active === first) {
          event.preventDefault();
          last.focus();
        }
      }
    },
    [onClose]
  );

  useClickOutside([contentRef], onClose);

  useEffect(() => {
    const handler = (event: globalThis.KeyboardEvent) => {
      const { key } = event;

      if (key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handleKeyDown, onClose]);

  const modal = (
    <div className={s.backdrop} role="presentation">
      <div
        className={s.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={contentRef}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <h2 id={titleId} className={s.title}>
          {title}
        </h2>
        <button
          className={s.close}
          aria-label="Закрыть модальное окно"
          onClick={onClose}
        >
          ✕
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );

  return withPortal ? createPortal(modal, document.body) : modal;
};

export const Modal = ({ isOpen, ...props }: Props) => {
  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
  }, [isOpen]);

  return isOpen && <ModalWrapper {...props} />;
};
