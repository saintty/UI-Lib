import { useCallback, useEffect, useState } from "react";

import { useDebouncedCallback } from "./useDebouncedCallback";

export const useSearch = (
  defaultSearch?: string,
  resetOnDefaultChange = false
) => {
  const [value, setValue] = useState(defaultSearch || "");
  const [search, setSearch] = useState(defaultSearch || "");

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

  useEffect(() => {
    if (resetOnDefaultChange) onSearchReset(defaultSearch || "");
  }, [defaultSearch, onSearchReset, resetOnDefaultChange]);

  return {
    value,
    search,
    setValue,
    onSearchReset,
    onSearchChange,
  };
};
