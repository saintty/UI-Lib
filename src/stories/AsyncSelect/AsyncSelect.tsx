import { useCallback, useEffect, useState } from "react";

import { Props as PSelect, Select } from "./../Select/Select";
import { ListBoxOption } from "../ListBox/ListBox";

export type Props = Omit<PSelect, "options"> & {
  getItems: (page: number, perPage: number) => Promise<ListBoxOption[]>;
};

const perPage = 10;

export const AsyncSelect = ({ getItems, ...props }: Props) => {
  const [page, setPage] = useState(1);
  const [options, setOptions] = useState<ListBoxOption[]>([]);
  const [isLoading, setLoading] = useState(false);

  const nextPage = useCallback(() => setPage((prev) => prev + 1), []);

  const fetchPage = useCallback(
    async (page: number) => {
      setLoading(true);

      const nextItems = await getItems(page, perPage);

      setOptions((prev) => (page === 1 ? nextItems : prev.concat(nextItems)));

      setLoading(false);
    },
    [getItems]
  );

  useEffect(() => {
    fetchPage(page);
  }, [fetchPage, page]);

  return (
    <Select
      {...props}
      isLoading={isLoading}
      options={options}
      onScrollEnd={nextPage}
    />
  );
};
