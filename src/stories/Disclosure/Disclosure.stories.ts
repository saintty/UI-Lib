import type { Meta, StoryObj } from "@storybook/react";

import { Disclosure } from "./Disclosure";

const meta: Meta<typeof Disclosure> = {
  title: "UI/Disclosure",
  component: Disclosure,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {
  args: {
    summary: "Откройте чтобы увидеть подробное описание",
    children: "Подробное описание",
  },
};
