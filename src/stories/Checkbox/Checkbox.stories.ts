import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Проставлена ли галочка",
  },
};

export const WithError: Story = {
  args: {
    label: "Проставлена ли галочка",
    errorMessage: "Обязательное поле",
  },
};
