import { memo } from "react";

import { useSearch } from "../__hooks/useSearch";
import { useUpdate } from "../__hooks/useUpdate";

import { Input, Props as PInput } from "../Input/Input";

import s from "./Search.module.scss";

type Props = Omit<PInput, "value"> & {
  onSearchChange?: (search: string) => void;
};

export const Search = memo(
  ({ defaultValue, onSearchChange: onSearchChangeProp, ...props }: Props) => {
    const { value, search, onSearchChange } = useSearch(defaultValue, true);

    useUpdate(() => {
      onSearchChangeProp?.(search);
    }, [search, onSearchChangeProp]);

    return (
      <Input
        {...props}
        type="search"
        defaultValue={defaultValue}
        value={value}
        onChange={onSearchChange}
        endContent={
          onSearchChangeProp && (
            <button
              type="button"
              aria-label="Clear search input"
              className={s.clear}
              onClick={() => onSearchChange("")}
            >
              X
            </button>
          )
        }
      />
    );
  }
);

Search.displayName = "Search";
