import Link from "next/link";
import { memo, useEffect, useRef } from "react";

import s from "./NotFound.module.scss";

const defaultMessages = {
  title: "Страница не найдена",
  description: "Извините, страница, которую вы ищете, не существует.",
  ctaLabel: "Вернуться на главную",
};

export const NotFound = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <div
      className={s.root}
      role="alert"
      aria-live="assertive"
      tabIndex={-1}
      ref={containerRef}
      aria-label={`Ошибка 404: ${defaultMessages.title}`}
    >
      <h1 className={s.title}>{defaultMessages.title}</h1>
      <p className={s.description}>{defaultMessages.description}</p>
      <Link href="/" className={s.cta} aria-label="Перейти на главную страницу">
        {defaultMessages.ctaLabel}
      </Link>
    </div>
  );
});

NotFound.displayName = "NotFound";
