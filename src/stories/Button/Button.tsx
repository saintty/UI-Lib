import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  memo,
  ReactNode,
  useRef,
} from "react";
import cx from "classnames";

import { useRipple } from "../__hooks/useRipple";
import { useKeyDown } from "../__hooks/useKeyDown";

import { Spinner } from "../Spinner/Spinner";

import ripple from "./../__styles/ripple.module.scss";
import s from "./Button.module.scss";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  startContent?: ReactNode;
  endContent?: ReactNode;
  href?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  withRipple?: boolean;
  onClick?: () => void;
};

export const Button = memo(
  ({
    className,
    title,
    type = "button",
    startContent,
    endContent,
    href,
    linkProps,
    isLoading,
    isDisabled,
    withRipple = false,
    onClick,
    ...props
  }: Props) => {
    const rootButtonRef = useRef<HTMLButtonElement>(null);
    const rootAnchorRef = useRef<HTMLAnchorElement>(null);

    const classNames = cx(s.root, className, ripple.root);

    const content = (
      <>
        {isLoading && <span hidden>Идет загрузка</span>}
        {startContent && <span className={s.startContent}>{startContent}</span>}
        {title}
        {endContent && <span className={s.endContent}>{endContent}</span>}
        {isLoading && (
          <span className={s.loadingContent}>
            <Spinner size="sm" color="#fff" />
          </span>
        )}
      </>
    );

    const handleKeyDown = useKeyDown(onClick);
    useRipple(withRipple && !isDisabled, href ? rootAnchorRef : rootButtonRef);

    if (href)
      return (
        <a
          {...linkProps}
          ref={rootAnchorRef}
          href={isDisabled ? undefined : href}
          role="button"
          className={classNames}
          aria-busy={isLoading ? "true" : undefined}
          aria-disabled={isDisabled ? "true" : undefined}
          tabIndex={isDisabled ? -1 : undefined}
          onClick={isDisabled ? (e) => e.preventDefault() : onClick}
          onKeyDown={isDisabled ? undefined : handleKeyDown}
        >
          {content}
        </a>
      );

    return (
      <button
        {...props}
        ref={rootButtonRef}
        className={classNames}
        onClick={onClick}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading ? "true" : undefined}
        aria-disabled={isDisabled || isLoading ? "true" : undefined}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
