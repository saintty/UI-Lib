import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "Популярное",
  },
};

export const WithRemove: Story = {
  args: {
    ...Default.args,
    onRemove: () => console.log("Remove"),
  },
};
