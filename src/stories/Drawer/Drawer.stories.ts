import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./Drawer";
import { DrawerDecorator } from "./_decorators";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  decorators: [DrawerDecorator],
};

export const WithLeft: Story = {
  ...Default,
  args: {
    position: "left",
  },
};

export const WithBottom: Story = {
  ...Default,
  args: {
    position: "bottom",
  },
};
