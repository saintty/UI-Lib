import { Decorator } from "@storybook/react";
import { Button } from "../Button/Button";
import { useToast } from "./ToastProvider";

export const ToastButtons = () => {
  const { onError, onInfo, onSuccess, onWarning } = useToast();

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Button onClick={() => onError("Произошла ошибка")}>Ошибка</Button>
      <Button onClick={() => onInfo("Обратите внимание")}>
        Предупреждение
      </Button>
      <Button onClick={() => onSuccess("Успешно выполнено")}>Успех</Button>
      <Button onClick={() => onWarning("Идет процесс выполнения")}>
        Информация
      </Button>
    </div>
  );
};

export const ToastBound: Decorator = (Story) => (
  <div style={{ maxWidth: 320 }}>
    <Story />
  </div>
);
