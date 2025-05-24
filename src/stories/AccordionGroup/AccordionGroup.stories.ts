import type { Meta, StoryObj } from "@storybook/react";

import { AccordionGroup } from "./AccordionGroup";

const meta: Meta<typeof AccordionGroup> = {
  title: "UI/AccordionGroup",
  component: AccordionGroup,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AccordionGroup>;

const items = [
  { title: "Элемент 1", content: "Контент 1", id: "1" },
  { title: "Элемент 2", content: "Контент 2", id: "2" },
  { title: "Элемент 3", content: "Контент 3", id: "3" },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const WithMultiple: Story = {
  args: {
    ...Default.args,
    selection: "multiple",
  },
};

export const WithDefaultSelectedKeys: Story = {
  args: {
    ...Default.args,
    defaultSelectedKeys: ["2"],
  },
};
