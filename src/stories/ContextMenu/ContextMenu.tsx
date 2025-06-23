import {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  MouseEvent,
  useCallback,
} from "react";
import cx from "classnames";

import { keyHandlers } from "./_constants";

import { useFocusOut } from "../__hooks/useFocusOut";
import { useClickOutside } from "../__hooks/useClickOutside";

import s from "./ContextMenu.module.scss";

export type Coords = { x: number; y: number };

export type MenuItem = {
  key: string;
  label: string;
};

export type Props = {
  items: MenuItem[];
  isOpen: boolean;
  coords: Coords;
  onClick: (item: MenuItem) => void;
  setOpen: (nextState: boolean) => void;
};

export const ContextMenu = ({
  items,
  isOpen,
  coords,
  onClick,
  setOpen,
}: Props) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const menuRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setOpen(true);
    setFocusedIndex(0);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setFocusedIndex((prev) => (prev + 1) % items.length);
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (event.key === "Escape") {
      closeMenu();
    } else if (event.key === "Enter" || event.key === " ") {
      if (focusedIndex >= 0) {
        onClick(items[focusedIndex]);
        closeMenu();
      }
    }

    if (keyHandlers.includes(event.key)) event.preventDefault();
  };

  const closeMenu = useCallback(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, [setOpen]);

  const handleClick = (item: MenuItem) => {
    onClick(item);
    closeMenu();
  };

  const handleKeyDown = (event: KeyboardEvent, item: MenuItem) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      onClick(item);
      closeMenu();
    }
  };

  useClickOutside([containerRef], () => setOpen(false));
  useFocusOut(menuRef, () => setOpen(false));

  useEffect(() => {
    if (!isOpen) return;
    if (focusedIndex < 0 || focusedIndex >= items.length) return;

    const menu = menuRef.current;
    if (!menu) return;

    const menuItems = menu.querySelectorAll<HTMLLIElement>(`.${s.menuItem}`);
    const el = menuItems[focusedIndex];

    if (el) el.focus();
  }, [focusedIndex, isOpen, items.length]);

  useEffect(() => {
    if (isOpen) setFocusedIndex(0);
    else setFocusedIndex(-1);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      onContextMenu={handleContextMenu}
      tabIndex={0}
      onKeyDown={isOpen ? onKeyDown : undefined}
      className={s.container}
    >
      {isOpen && (
        <ul
          className={s.menu}
          role="menu"
          ref={menuRef}
          style={{ top: coords.y, left: coords.x, position: "fixed" }}
          aria-label="Context menu"
        >
          {items.map((item) => {
            const { key, label } = item;
            const isFocused =
              focusedIndex === items.findIndex((item) => item.key === key);

            return (
              <li
                key={key}
                role="menuitem"
                tabIndex={isFocused ? 0 : -1}
                className={cx(s.menuItem, {
                  [s.focused]: isFocused,
                })}
                onClick={() => handleClick(item)}
                onKeyDown={(event) => handleKeyDown(event, item)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
