import React from "react";
import cx from "classnames";

import s from "./Skeleton.module.scss";

type Props = DefaultProps & {
  ariaLabel?: string;
};

export const Skeleton = ({ className, ariaLabel }: Props) => (
  <div
    className={cx(s.root, className)}
    role="status"
    aria-busy="true"
    aria-label={ariaLabel}
  />
);
