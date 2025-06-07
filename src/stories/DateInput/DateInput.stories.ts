import type { Meta, StoryObj } from "@storybook/react";

import { DateInput } from "./DateInput";

const meta: Meta<typeof DateInput> = {
  title: "UI/Inputs/DateInput",
  component: DateInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: "Дата рождения",
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultDate: new Date(2002, 9, 31),
  },
};

export const WithCloseOnSelect: Story = {
  args: {
    ...Default.args,
    closeOnSelect: true,
  },
};
