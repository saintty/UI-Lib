import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  memo,
  ReactNode,
  useRef,
} from "react";
import cx from "classnames";

import { useRipple } from "../__hooks/useRipple";
import { useKeyDown } from "../__hooks/useKeyDown";

import { mergeRefs } from "../__utils/merge-refs";

import { Spinner } from "../Spinner/Spinner";

import ripple from "./../__styles/ripple.module.scss";
import s from "./Button.module.scss";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  DefaultProps & {
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
  forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
    (
      {
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
        children,
        onClick,
        ...props
      },
      ref
    ) => {
      const buttonRef = useRef<HTMLButtonElement>(null);
      const anchorRef = useRef<HTMLAnchorElement>(null);

      const classNames = cx(s.root, className, ripple.root);

      const content = (
        <>
          {isLoading && <span hidden>Идет загрузка</span>}
          {startContent && (
            <span className={s.startContent}>{startContent}</span>
          )}
          {title}
          {children}
          {endContent && <span className={s.endContent}>{endContent}</span>}
          {isLoading && (
            <span className={s.loadingContent}>
              <Spinner size="sm" color="#fff" />
            </span>
          )}
        </>
      );

      const handleKeyDown = useKeyDown(onClick);
      useRipple(withRipple && !isDisabled, href ? anchorRef : buttonRef);

      if (href)
        return (
          <a
            {...linkProps}
            ref={mergeRefs(ref, anchorRef)}
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
          ref={mergeRefs(ref, buttonRef)}
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
  )
);

Button.displayName = "Button";
