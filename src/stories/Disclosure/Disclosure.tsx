import { useId, ReactNode } from "react";

import { useControlled } from "../__hooks/useControlled";

import { Button } from "../Button/Button";

import s from "./Disclosure.module.scss";

type Props = {
  summary: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
};

export const Disclosure = ({
  summary,
  children,
  isOpen: isOpenProp,
}: Props) => {
  const [isOpen, setIsOpen] = useControlled(isOpenProp, false);

  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const contentId = `${baseId}-content`;

  return (
    <div className={s.root}>
      <Button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {summary}
      </Button>
      <div
        role="region"
        id={contentId}
        className={s.panel}
        hidden={!isOpen}
        aria-labelledby={buttonId}
      >
        {children}
      </div>
    </div>
  );
};
