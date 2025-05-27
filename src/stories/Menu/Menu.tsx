import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  KeyboardEvent,
} from "react";

import cx from "classnames";

import { keyHandlers } from "./_constants";

import { useControlled } from "../__hooks/useControlled";

import { isNil } from "../__utils/is-nil";
import { useClickOutside } from "../__hooks/useClickOutside";

import { Button } from "../Button/Button";

import s from "./Menu.module.scss";

type Props<T> = {
  isOpen?: boolean;
  buttonLabel: string;
  items: T[];
  getItemKey: (item: T) => string;
  getItemTitle: (item: T) => string;
  onSelect?: (item: T) => void;
};

export const Menu = <T,>({
  buttonLabel,
  items,
  isOpen: isOpenProp,
  getItemKey,
  getItemTitle,
  onSelect,
}: Props<T>) => {
  const [, isOpen, setIsOpen] = useControlled(isOpenProp, false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);

    buttonRef.current?.focus();
  }, [setIsOpen]);

  const onButtonKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const handlers = ["ArrowDown", "ArrowUp"];

      if (!handlers.includes(event.key)) return;

      event.preventDefault();
      setIsOpen(true);
    },
    [setIsOpen]
  );

  const handleSelect = useCallback(
    (item: T) => {
      onSelect?.(item);
      closeMenu();
    },
    [closeMenu, onSelect]
  );

  const onMenuKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const itemCount = items.length;

      if (itemCount === 0) return;
      if (!keyHandlers.includes(event.key)) event.preventDefault();

      if (event.key === "Escape" || event.key === "Tab") closeMenu();
      else if (event.key === "ArrowDown")
        setActiveIndex((prev) => (isNil(prev) ? 0 : (prev + 1) % itemCount));
      else if (event.key === "ArrowUp")
        setActiveIndex((prev) =>
          isNil(prev) ? itemCount - 1 : (prev - 1 + itemCount) % itemCount
        );
      else if (event.key === "Home") setActiveIndex(0);
      else if (
        !isNil(activeIndex) &&
        (event.key === "Enter" || event.key === " ")
      ) {
        onSelect?.(items[activeIndex]);
        closeMenu();
      }
    },
    [closeMenu, items, activeIndex, onSelect]
  );

  useEffect(() => {
    if (!isOpen || activeIndex === null || !menuRef.current) return;

    const lis = menuRef.current.querySelectorAll("li");
    lis[activeIndex].focus();
  }, [activeIndex, isOpen]);

  useClickOutside([buttonRef, menuRef], closeMenu, isOpen);

  return (
    <div className={s.root} onKeyDown={onMenuKeyDown}>
      <Button
        withRipple
        ref={buttonRef}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="menu-list"
        onClick={toggleMenu}
        onKeyDown={onButtonKeyDown}
        className={s.button}
        type="button"
      >
        {buttonLabel}
      </Button>
      {isOpen && (
        <ul id="menu-list" className={s.menu} role="menu" ref={menuRef}>
          {items.map((item, index) => (
            <li
              key={getItemKey(item)}
              role="menuitem"
              tabIndex={-1}
              className={cx(s.item)}
              onClick={() => handleSelect(item)}
              onFocus={() => setActiveIndex(index)}
            >
              {getItemTitle(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
