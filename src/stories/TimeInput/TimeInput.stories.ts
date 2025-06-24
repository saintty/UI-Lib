import type { Meta, StoryObj } from "@storybook/react";

import { TimeInput } from "./TimeInput";

const meta: Meta<typeof TimeInput> = {
  title: "UI/Inputs/TimeInput",
  component: TimeInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = {
  args: {
    label: "Время заказа",
  },
};
