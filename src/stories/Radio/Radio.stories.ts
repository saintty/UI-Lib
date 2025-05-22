import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: "React + NextJs",
  },
};

export const WithDisabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};
