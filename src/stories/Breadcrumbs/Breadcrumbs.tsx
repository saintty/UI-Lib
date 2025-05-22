import cx from "classnames";

import s from "./Breadcrumbs.module.scss";

type Item = {
  label: string;
  href?: string;
};

type Props = DefaultProps & {
  items: Item[];
};

export const Breadcrumbs = ({ items, className }: Props) => {
  return (
    <nav className={cx(s.root, className)} aria-label="Breadcrumb">
      <ol className={s.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={s.item}>
              <a
                href={item.href}
                className={cx(s.link, { [s.current]: isLast })}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
