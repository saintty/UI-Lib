import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { v4 } from "uuid";

import { duration, maxToast } from "./_constants";
import { Toast, ToastItem } from "./Toast";

import s from "./styles/ToastProvider.module.scss";

type onToast = (message: string) => void;
type ToastContextType = {
  onSuccess: onToast;
  onWarning: onToast;
  onError: onToast;
  onInfo: onToast;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (toast: Pick<ToastItem, "level" | "message">) => {
      setToasts((prev) => {
        const newState = prev.length === maxToast ? prev.slice(1) : prev;

        return newState.concat([{ ...toast, duration, id: v4() }]);
      });
    },
    []
  );

  const onSuccess = useCallback<onToast>(
    (message) => showToast({ message, level: "success" }),
    [showToast]
  );

  const onWarning = useCallback<onToast>(
    (message) => showToast({ message, level: "warning" }),
    [showToast]
  );

  const onError = useCallback<onToast>(
    (message) => showToast({ message, level: "error" }),
    [showToast]
  );

  const onInfo = useCallback<onToast>(
    (message) => showToast({ message, level: "info" }),
    [showToast]
  );

  const removeToast = useCallback((removeId: ToastItem["id"]) => {
    setToasts((prev) => prev.filter(({ id }) => id !== removeId));
  }, []);

  return (
    <ToastContext.Provider value={{ onError, onInfo, onSuccess, onWarning }}>
      {children}
      <div aria-live="polite" aria-atomic="false" className={s.root}>
        {toasts.map((toast) => (
          <Toast {...toast} key={toast.id} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
