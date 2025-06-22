import type { Meta, StoryObj } from "@storybook/react";

import { ChipGroup } from "./ChipGroup";

const meta: Meta<typeof ChipGroup> = {
  title: "UI/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ChipGroup>;

export const Default: Story = {
  args: {
    tags: ["Популярное", "Новое"],
    onRemove: console.log,
  },
};
