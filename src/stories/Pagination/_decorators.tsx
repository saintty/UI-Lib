import { useState } from "react";
import { Decorator } from "@storybook/react";

export const PaginationDecorator: Decorator = (Story) => {
  const [page, setPage] = useState(1);

  return (
    <Story
      args={{ total: 100, current: page, siblings: 3, onPageChange: setPage }}
    />
  );
};
