import React, { KeyboardEvent, useEffect, useRef } from "react";
import cx from "classnames";

import { keyHandlers } from "./_constants";

import { createPageArray } from "./_utils";

import s from "./Pagination.module.scss";

type Props = {
  total: number;
  current: number;
  siblings?: number;
  controlsId?: string;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  total,
  current,
  siblings = 1,
  controlsId,
  onPageChange,
}: Props) => {
  const pageRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const focusPage = useRef<number | null>(null);

  const pages = createPageArray({ current, total, siblings });

  const handleClick = (page: number | string) => {
    if (typeof page === "number" && page !== current) {
      focusPage.current = page;
      onPageChange(page);
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    page: number
  ) => {
    const { key } = event;

    if (key === "ArrowRight") handleClick(page + 1);
    else if (key === "ArrowLeft") handleClick(page - 1);
    else if (key === "Home") handleClick(1);
    else if (key === "End") handleClick(total);
    else if (key === " " || key === "Enter") handleClick(page);

    if (keyHandlers.includes(event.key)) event.preventDefault();
  };

  const renderPage = (page: number | string, index: number) => {
    if (typeof page === "string")
      return (
        <span className={s.ellipsis} aria-hidden="true">
          {page}
        </span>
      );

    return (
      <button
        type="button"
        aria-current={page === current ? "page" : undefined}
        aria-label={`Страница ${page}`}
        aria-controls={controlsId}
        className={cx(s.button, {
          [s.active]: page === current,
        })}
        ref={(el) => {
          if (el) pageRefs.current[index] = el;
        }}
        onKeyDown={(event) => handleKeyDown(event, page)}
        onClick={() => handleClick(page)}
      >
        {page}
      </button>
    );
  };

  useEffect(() => {
    if (focusPage.current === null) return;

    const index = pages.findIndex((p) => p === focusPage.current);
    if (index !== -1) pageRefs.current[index]?.focus();

    focusPage.current = null;
  }, [pages]);

  return (
    <nav className={s.root} role="navigation" aria-label="Пагинация">
      <ul className={s.list} role="list">
        <li>
          <button
            type="button"
            className={s.button}
            onClick={() => handleClick(current - 1)}
            disabled={current === 1}
            aria-disabled={current === 1}
            aria-label="Предыдущая страница"
          >
            ←
          </button>
        </li>
        {pages.map((page, idx) => (
          <li
            role="listitem"
            key={typeof page === "number" ? page : `ellipsis-${idx}`}
          >
            {renderPage(page, idx)}
          </li>
        ))}
        <li>
          <button
            type="button"
            className={s.button}
            onClick={() => handleClick(current + 1)}
            disabled={current === total}
            aria-disabled={current === total}
            aria-label="Следующая страница"
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  );
};
