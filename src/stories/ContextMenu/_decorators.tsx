import { Decorator } from "@storybook/react";
import { MouseEvent, useCallback, useState } from "react";

import { ContextMenu, Coords, MenuItem } from "./ContextMenu";

const items: MenuItem[] = [
  {
    key: "new",
    label: "Добавить",
  },
  {
    key: "edit",
    label: "Редактировать",
  },
  {
    key: "remove",
    label: "Удалить",
  },
];

export const ContextMenuDecorator = () => {
  const [isOpen, setOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0 });

  const handleOpen = useCallback((event: MouseEvent) => {
    setCoords({ x: event.clientX, y: event.clientY });
    setOpen(true);
  }, []);

  return (
    <div>
      <div
        style={{
          padding: 20,
          backgroundColor: "lightgray",
          border: "1px solid red",
          borderRadius: 16,
          position: "relative",
        }}
        onClick={handleOpen}
      >
        Открыть контекстное меню
      </div>
      <ContextMenu
        items={items}
        isOpen={isOpen}
        coords={coords}
        setOpen={setOpen}
        onClick={console.log}
      />
    </div>
  );
};

export const ToastBound: Decorator = (Story) => (
  <div style={{ maxWidth: 320 }}>
    <Story />
  </div>
);
