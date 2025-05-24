const scrollLockClass = "lock-scroll";

export const lockScroll = () => {
  const body = document.body;
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.classList.add(scrollLockClass);
};

export const unlockScroll = () => {
  document.body.classList.remove(scrollLockClass);
  document.body.style.paddingRight = "";
};
