import { useCallback, useState } from "react";

import { useDebouncedCallback } from "./useDebouncedCallback";

export const useSearch = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");

  const setSearchDebounce = useDebouncedCallback(setSearch);

  const onSearchChange = useCallback(
    (value: string) => {
      setValue(value);
      setSearchDebounce(value);
    },
    [setValue, setSearchDebounce]
  );

  const onSearchReset = useCallback((value: string = "") => {
    setValue(value);
    setSearch(value);
  }, []);

  return {
    value,
    search,
    setValue,
    onSearchReset,
    onSearchChange,
  };
};
