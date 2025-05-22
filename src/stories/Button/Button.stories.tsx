import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    title: "Кнопка",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithDisabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const LinkButton: Story = {
  args: {
    href: "#",
    linkProps: {
      target: "_blank",
    },
  },
};

export const WithRipple: Story = {
  args: {
    withRipple: true,
  },
};
