import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "./Search";

const meta: Meta<typeof Search> = {
  title: "UI/Inputs/Search",
  component: Search,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    label: "Поиск",
    onSearchChange: console.log,
  },
};

export const WithDefault: Story = {
  args: {
    ...Default.args,
    defaultValue: "Table",
  },
};
