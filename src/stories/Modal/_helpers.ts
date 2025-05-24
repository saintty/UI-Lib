import { focusable } from "./_constants";

const isVisible = (el: HTMLElement) => {
  const style = window.getComputedStyle(el);

  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    el.offsetParent !== null
  );
};

export const getFocusableElements = (root: HTMLElement) => {
  const elements = Array.from(
    root.querySelectorAll<HTMLElement>(focusable.join(","))
  );

  return elements.filter((el) => isVisible(el));
};
