import { useState } from "react";
import { Decorator } from "@storybook/react";

import { Button } from "../Button/Button";

export const ModalButton: Decorator = (Story) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Модальное окно</Button>
      <Story
        args={{
          isOpen,
          title: "Модальное окно",
          withPortal: true,
          children: (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              perspiciatis expedita voluptas, molestias dicta facere quasi
              repudiandae quos voluptatibus ea iusto soluta eligendi aliquid
              itaque. Sunt sequi libero placeat iure, repudiandae et dolores
              nesciunt totam perferendis labore ut accusamus vitae rem soluta!
              Repellat consequatur incidunt sed doloremque ipsam asperiores
              debitis!
            </div>
          ),
          onClose: () => setIsOpen(false),
        }}
      />
    </div>
  );
};
