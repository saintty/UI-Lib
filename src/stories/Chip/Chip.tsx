import { KeyboardEvent, memo, MouseEvent } from "react";
import cx from "classnames";

import s from "./styles/Chip.module.scss";

type Props = {
  label: string;
  className?: string;
  onRemove?: () => void;
};

export const Chip = memo(({ label, className, onRemove }: Props) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      onRemove?.();
    }
  };

  const handleRemoveClick = (event: MouseEvent) => {
    event.stopPropagation();
    onRemove?.();
  };

  return (
    <span
      role="listitem"
      tabIndex={0}
      className={cx(s.tag, className)}
      onKeyDown={handleKeyDown}
    >
      <span className={s.label}>{label}</span>
      {onRemove && (
        <button
          type="button"
          className={s.remove}
          aria-label={`Удалить ${label}`}
          onClick={handleRemoveClick}
        >
          ×
        </button>
      )}
    </span>
  );
});

Chip.displayName = "Chip";
