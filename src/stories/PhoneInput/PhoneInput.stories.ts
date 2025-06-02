import type { Meta, StoryObj } from "@storybook/react";

import { PhoneInput } from "./PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  title: "UI/Inputs/PhoneInput",
  component: PhoneInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    label: "Номер телефона",
  },
};
