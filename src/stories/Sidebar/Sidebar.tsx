import cx from "classnames";

import s from "./Sidebar.module.scss";

type Props = DefaultProps & {
  ariaLabel?: string;
};

export const Sidebar = ({
  children,
  className,
  ariaLabel = "Боковая панель",
}: Props) => {
  return (
    <aside
      className={cx(s.root, className)}
      role="complementary"
      aria-label={ariaLabel}
    >
      {children}
    </aside>
  );
};
