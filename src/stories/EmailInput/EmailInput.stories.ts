import type { Meta, StoryObj } from "@storybook/react";

import { EmailInput } from "./EmailInput";

const meta: Meta<typeof EmailInput> = {
  title: "UI/Inputs/EmailInput",
  component: EmailInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof EmailInput>;

export const Default: Story = {
  args: {
    label: "Адрес электронной почты",
  },
};
