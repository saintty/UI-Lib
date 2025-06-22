import React, { memo } from "react";

import { Chip } from "./Chip";

import s from "./styles/ChipGroup.module.scss";

type Props = {
  tags: string[];
  onRemove: (tag: string) => void;
};

export const ChipGroup = memo(({ tags, onRemove }: Props) => {
  return (
    <div role="list" className={s.root}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} onRemove={() => onRemove(tag)} />
      ))}
    </div>
  );
});

ChipGroup.displayName = "ChipGroup";
