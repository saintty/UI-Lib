import { memo } from "react";
import cx from "classnames";

import { ListBoxOption } from "./ListBox";

import s from "./ListBoxItem.module.scss";

type Props = {
  id: string;
  title: string;
  item: ListBoxOption;
  isSelected: boolean;
  isDisabled: boolean;
  isActive: boolean;
  onClick: (option: ListBoxOption) => void;
};

export const ListBoxItem = memo(
  ({ id, title, item, isSelected, isDisabled, isActive, onClick }: Props) => (
    <li
      id={id}
      role="option"
      tabIndex={-1}
      aria-selected={isSelected ? true : undefined}
      aria-disabled={isDisabled ? true : undefined}
      className={cx(s.root, {
        [s.selected]: isSelected,
        [s.active]: isActive,
        [s.disabled]: isDisabled,
      })}
      onClick={isDisabled ? undefined : () => onClick(item)}
    >
      {title}
    </li>
  )
);

ListBoxItem.displayName = "ListBoxItem";
