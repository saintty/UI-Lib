import { KeyboardEvent, useId, useRef } from "react";
import cx from "classnames";

import { useToggle } from "../__hooks/useToggle";
import { useUpdate } from "../__hooks/useUpdate";
import { useFocusTrap } from "../__hooks/useFocusTrap";

import s from "./Nav.module.scss";

export const Nav = () => {
  const navId = useId();
  const [isOpen, toggleOpen] = useToggle(false);

  const navRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const { focusNext } = useFocusTrap(navRef);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") focusNext(event);
    else if (event.key === "Escape") toggleOpen(false);
  };

  useUpdate(() => {
    if (isOpen) navRef.current?.focus();
    else burgerRef.current?.focus();
  }, [isOpen]);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <button
          ref={burgerRef}
          className={s.burger}
          aria-controls={navId}
          aria-expanded={isOpen}
          aria-label="Открыть меню"
          onClick={() => toggleOpen()}
        >
          <span className={s.bar} />
          <span className={s.bar} />
          <span className={s.bar} />
        </button>

        <nav
          id={navId}
          ref={navRef}
          className={cx(s.nav, { [s.open]: isOpen })}
          onKeyDown={handleKeyDown}
        >
          <ul className={s.list}>
            <li>
              <a href="#home" onClick={() => toggleOpen(false)}>
                Главная
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => toggleOpen(false)}>
                О нас
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => toggleOpen(false)}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => toggleOpen(false)}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
