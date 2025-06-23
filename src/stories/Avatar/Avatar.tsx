import Image from "next/image";
import cx from "classnames";

import s from "./Avatar.module.scss";

type Props = {
  src?: string;
  alt?: string;
  decorative?: boolean;
  className?: string;
};

export const Avatar = ({
  src,
  alt = "Avatar",
  decorative = false,
  className,
}: Props) => (
  <span className={cx(s.root, className)}>
    {
      <Image
        className={s.image}
        src={src ?? ""}
        alt={decorative ? "" : alt}
        width={150}
        height={150}
      />
    }
  </span>
);
