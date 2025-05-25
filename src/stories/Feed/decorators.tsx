import { useCallback, useEffect, useState } from "react";
import { Decorator } from "@storybook/react";
import { v4 } from "uuid";

import s from "./Feed.module.scss";

type Item = { id: string; title: string; content: string };

export const FeedWrapper: Decorator = (Story) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setLoading] = useState(false);

  const handleLoadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 10 }, (_, index) => ({
          id: v4(),
          title: `Статья ${prev.length + index}`,
          content: `Контент статьи ${prev.length + index}`,
        })),
      ]);

      setLoading(false);
    }, 1500);
  }, []);

  const renderItem = useCallback(
    ({ title, content }: Item) => (
      <>
        <h2 className={s.title}>{title}</h2>
        <p className={s.content}>{content}</p>
      </>
    ),
    []
  );

  useEffect(() => {
    handleLoadMore();
  }, [handleLoadMore]);

  return (
    <Story
      args={{
        items,
        isLoading,
        getItemKey: ({ id }: Item) => id,
        getAriaLabel: ({ title }: Item) => title,
        onLoadMore: handleLoadMore,
        renderItem,
      }}
    />
  );
};
