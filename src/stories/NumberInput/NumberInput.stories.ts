import type { Meta, StoryObj } from "@storybook/react";

import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "UI/Inputs/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    label: "Количество просмотров",
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    floatDigits: 2,
    defaultValue: 2394.26,
  },
};

export const WithFloat: Story = {
  args: {
    ...Default.args,
    floatDigits: 2,
  },
};

export const WithMinMax: Story = {
  args: {
    ...Default.args,
    min: 10,
    max: 23,
  },
};
