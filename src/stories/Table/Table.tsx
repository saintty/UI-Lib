import { ReactNode } from "react";
import cx from "classnames";

import s from "./Table.module.scss";

type Column<T extends Record<string, unknown>> = {
  key: Extract<keyof T, string>;
  label: string;
  getValue?: (item: T) => ReactNode;
};

type Props<T extends Record<string, unknown>> = {
  className?: string;
  caption?: string;
  columns: Column<T>[];
  items: T[];
};

export const Table = <T extends Record<string, unknown>>({
  className,
  caption,
  columns,
  items,
}: Props<T>) => {
  return (
    <div
      className={cx(s.root, className)}
      role="region"
      aria-label={caption ?? "Data table"}
    >
      <table className={s.table}>
        {caption && <caption className={s.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map(({ key, label }) => (
              <th key={key} scope="col">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map(({ key, getValue }, colIndex) => (
                <td key={colIndex}>
                  {getValue?.(item) ?? (item[key] as string) ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
