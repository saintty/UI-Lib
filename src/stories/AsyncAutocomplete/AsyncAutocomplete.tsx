import { useCallback, useEffect, useState } from "react";

import { usePagination } from "../__hooks/usePagination";

import { ListBoxOption } from "../ListBox/ListBox";
import {
  Autocomplete,
  Props as PAutocomplete,
} from "./../Autocomplete/Autocomplete";

export type Props = Omit<PAutocomplete, "options" | "getItems"> & {
  getItems: (
    page: number,
    perPage: number,
    search: string
  ) => Promise<ListBoxOption[]>;
};

export const AsyncAutocomplete = ({
  defaultSearch,
  getItems,
  ...props
}: Props) => {
  const { page, perPage, resetPage, nextPage } = usePagination();

  const [options, setOptions] = useState<ListBoxOption[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState(defaultSearch || "");

  const fetchItems = useCallback(
    async (page: number, search: string) => {
      setLoading(true);

      const nextItems = await getItems(page, perPage, search);

      setOptions((prev) => (page === 1 ? nextItems : prev.concat(nextItems)));
      setLoading(false);
    },
    [getItems, perPage]
  );

  const handleSetQuery = useCallback(
    (search: string) => {
      setSearch(search);
      resetPage();
    },
    [resetPage]
  );

  useEffect(() => {
    fetchItems(page, search);
  }, [fetchItems, page, search]);

  return (
    <Autocomplete
      {...props}
      defaultSearch={defaultSearch}
      options={options}
      isLoading={isLoading}
      onScrollEnd={nextPage}
      getItems={handleSetQuery}
    />
  );
};
