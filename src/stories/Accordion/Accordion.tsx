import React, { useState, useRef, useEffect, useCallback, useId } from "react";

import { useControlled } from "../__hooks/useControlled";

import s from "./Accordion.module.scss";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
};

export const Accordion = ({
  title,
  children,
  isOpen: isOpenProp,
  onToggle,
}: Props) => {
  const contentId = useId();
  const buttonId = useId();

  const [, isOpen, setIsOpen] = useControlled(isOpenProp);

  const [maxHeight, setMaxHeight] = useState<string>("0px");

  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      onToggle?.(!prev);

      return !prev;
    });
  }, [onToggle, setIsOpen]);

  useEffect(() => {
    const needUpdate = isOpen && contentRef.current;

    const newMaxHeight = needUpdate
      ? contentRef.current!.scrollHeight + "px"
      : "0px";

    setMaxHeight(newMaxHeight);
  }, [isOpen, children]);

  return (
    <div className={s.root}>
      <button
        id={buttonId}
        data-slot="button"
        type="button"
        className={s.header}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={handleToggle}
      >
        {title}
        <div aria-hidden="true" className={s.icon}>
          {isOpen ? "▲" : "▼"}
        </div>
      </button>
      <div
        id={contentId}
        role="region"
        className={s.content}
        ref={contentRef}
        aria-labelledby={buttonId}
        style={{
          maxHeight,
        }}
      >
        <div className={s.inner}>{children}</div>
      </div>
    </div>
  );
};
