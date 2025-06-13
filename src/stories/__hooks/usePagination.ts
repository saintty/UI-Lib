import { useCallback, useState } from "react";

const defaultPerPage = 10;

export const usePagination = (perPage: number = defaultPerPage) => {
  const [page, setPage] = useState(1);

  const nextPage = useCallback(() => setPage((prev) => prev + 1), []);

  const resetPage = useCallback(() => setPage(1), []);

  return { page, perPage, nextPage, resetPage, setPage };
};
