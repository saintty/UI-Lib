export const collectButtonElements = (root: HTMLElement) => {
  const buttonSelector = '[data-slot="button"]';
  const buttons = root.querySelectorAll<HTMLButtonElement>(buttonSelector);

  return Array.from(buttons);
};
