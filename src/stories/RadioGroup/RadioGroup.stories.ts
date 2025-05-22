import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

const radios = [
  {
    title: "Apple",
    value: "Apple",
  },
  {
    title: "Orange",
    value: "Orange",
  },
  {
    title: "Cherry",
    value: "Cherry",
  },
];

export const Default: Story = {
  args: {
    name: "Fruits",
    label: "Fruits",
    radios,
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Default.args,
    defaultValue: "Cherry",
  },
};

export const WithDisabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};
