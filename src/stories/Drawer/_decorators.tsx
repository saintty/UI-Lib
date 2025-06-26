import { useState } from "react";
import { Decorator } from "@storybook/react";

import { Button } from "../Button/Button";

export const DrawerDecorator: Decorator = (Story, options) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Drawer</Button>
      {open && (
        <Story
          args={{
            position: options.args.position,
            onClose: () => setOpen(false),
            label: "Filters",
            children: (
              <ul
                style={{
                  display: "flex",
                  padding: 16,
                  fontSize: 32,
                  lineHeight: "40px",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Gallary">Gallary</a>
                </li>
                <li>
                  <a href="#Team">Team</a>
                </li>
                <li>
                  <a href="#Contacts">Contacts</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
              </ul>
            ),
          }}
        />
      )}
    </div>
  );
};
