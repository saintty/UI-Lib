import { RefObject, useEffect } from "react";

import s from "./../__styles/ripple.module.scss";

export const useRipple = (
  active: boolean,
  rootRef: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!active) return;
    const el = rootRef.current;

    if (!el) return;

    const rippleHandler = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.classList.add(s.ripple);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    el.addEventListener("click", rippleHandler);

    return () => {
      el.removeEventListener("click", rippleHandler);
    };
  }, [active, rootRef]);
};
