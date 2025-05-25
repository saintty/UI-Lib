import React, { ReactNode, useCallback } from "react";

import { useInfiniteScroll } from "../__hooks/useInfiniteScroll";

import { Spinner } from "../Spinner/Spinner";

import s from "./Feed.module.scss";

export type Props<T> = {
  items: T[];
  isLoading: boolean;
  getItemKey: (item: T) => string;
  onLoadMore: () => void;
  renderItem: (item: T, index?: number) => ReactNode;
  getAriaLabel?: (item: T) => string;
};

export const Feed = <T,>({
  items,
  isLoading,
  onLoadMore,
  getItemKey,
  renderItem: renderItemProp,
  getAriaLabel,
}: Props<T>) => {
  const [containerRef] = useInfiniteScroll({
    disabled: isLoading,
    onLoadMore,
  });

  const renderItem = useCallback(
    (item: T, index: number) => (
      <article
        key={getItemKey(item)}
        tabIndex={0}
        aria-label={getAriaLabel?.(item)}
        className={s.item}
      >
        {renderItemProp(item, index)}
      </article>
    ),
    [getAriaLabel, getItemKey, renderItemProp]
  );

  return (
    <div
      role="feed"
      aria-busy={isLoading ? "true" : undefined}
      aria-live="polite"
      aria-label="Лента элементов"
      ref={containerRef}
      className={s.root}
    >
      {items.map(renderItem)}
      {isLoading && (
        <div className={s.loading}>
          <Spinner variant="dots" />
        </div>
      )}
    </div>
  );
};
