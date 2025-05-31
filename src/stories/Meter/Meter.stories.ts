import type { Meta, StoryObj } from "@storybook/react";

import { Meter } from "./Meter";

const meta: Meta<typeof Meter> = {
  title: "UI/Meter",
  component: Meter,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Meter>;

export const Default: Story = {
  args: {
    min: 100,
    max: 150,
    now: 125,
    title: "Использование GPU",
  },
};
