import React, {
  FC,
  SVGProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import cx from "classnames";

import { animateDuration } from "./_constants";

import { ReactComponent as InfoIcon } from "icons/info.svg";
import { ReactComponent as ErrorIcon } from "icons/cross.svg";
import { ReactComponent as WarningIcon } from "icons/warning.svg";
import { ReactComponent as SuccessIcon } from "icons/check.svg";

import s from "./styles/Toast.module.scss";

export type ToastLevel = "info" | "success" | "warning" | "error";

export type ToastItem = {
  id: string;
  message: string;
  level: ToastLevel;
  duration: number;
};

type Props = ToastItem & {
  onClose: (id: ToastItem["id"]) => void;
};

const icons: Record<ToastLevel, FC<SVGProps<SVGElement>>> = {
  info: InfoIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  success: SuccessIcon,
};

export const Toast = ({ id, message, level, duration, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const timeLeft = useRef(duration);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const startTimeRef = useRef(Date.now());

  const handleClose = useCallback(() => setIsVisible(false), [setIsVisible]);

  const handleMouseLeave = useCallback(() => {
    startTimeRef.current = Date.now();
    timeoutRef.current = setTimeout(handleClose, timeLeft.current);
  }, [handleClose]);

  const handleMouseEnter = useCallback(() => {
    if (!timeoutRef.current) return;

    clearTimeout(timeoutRef.current);
    timeLeft.current -= Date.now() - startTimeRef.current;
  }, []);

  useEffect(() => {
    handleMouseLeave();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [duration, handleClose, handleMouseLeave]);

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => onClose(id), animateDuration);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [id, isVisible, onClose]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const Icon = icons[level];

  return (
    <div
      role="alert"
      className={cx(s.root, {
        [s.error]: level === "error",
        [s.warning]: level === "warning",
        [s.success]: level === "success",
        [s.visible]: isVisible,
        [s.hidden]: !isVisible,
      })}
      onClick={handleClose}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon className={s.icon} />
      <div>{message}</div>
    </div>
  );
};
