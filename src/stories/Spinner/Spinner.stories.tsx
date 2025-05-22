import type { Meta, StoryObj } from "@storybook/react";

import { sizes } from "../constants";

import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    size: "lg",
    variant: "lines",
  },
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    size: {
      control: {
        type: "radio",
      },
      options: sizes,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
