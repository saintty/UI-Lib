import { useCallback } from "react";

import { Modal, Props as PModal } from "../Modal/Modal";
import { Button } from "../Button/Button";

import s from "./ConfirmModal.module.scss";

type Props = PModal & {
  onAccept: () => void;
  onReject: () => void | Promise<void>;
};

export const ConfirmModal = ({
  children,
  onAccept,
  onReject,
  onClose,
  ...props
}: Props) => {
  const handleReject = useCallback(async () => {
    await onReject();
    onClose();
  }, [onReject, onClose]);

  return (
    <Modal {...props} onClose={onClose}>
      {children}
      <div className={s.controls}>
        <Button
          className={s.control}
          aria-label="Подтвердить действие"
          onClick={onAccept}
        >
          Принять
        </Button>
        <Button
          className={s.control}
          aria-label="Отклонить действие"
          onClick={handleReject}
        >
          Отклонить
        </Button>
      </div>
    </Modal>
  );
};
