import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    label: "Количество выполненных задач",
    max: 7,
    value: 3,
  },
};
