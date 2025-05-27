import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "UI/Menu",
  component: Menu,
  tags: ["autodocs"],
};
export default meta;

type Item = {
  id: string;
  label: string;
};

type Story = StoryObj<typeof Menu<Item>>;

const items = [
  { id: "1", label: "Пункт 1" },
  { id: "2", label: "Пункт 2" },
  { id: "3", label: "Пункт 3" },
];

export const Default: Story = {
  args: {
    buttonLabel: "Открыть меню",
    items,
    getItemKey: ({ id }) => id,
    getItemTitle: ({ label }) => label,
    onSelect: console.log,
  },
};
