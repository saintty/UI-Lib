import type { Meta, StoryObj } from "@storybook/react";

import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
  title: "UI/ListBox",
  component: ListBox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ListBox>;

const items = [
  { id: "1", title: "Apple", value: "apple" },
  { id: "2", title: "Banana", value: "banana" },
  { id: "3", title: "Cherry2", value: "cherry" },
  { id: "11", title: "Apple2", value: "apple" },
  { id: "22", title: "Banana2", value: "banana" },
  { id: "33", title: "Cherry3", value: "cherry" },
  { id: "111", title: "Apple3", value: "apple" },
  { id: "222", title: "Banana3", value: "banana" },
  { id: "333", title: "Cherry4", value: "cherry" },
];

export const Default: Story = {
  args: {
    options: items,
    getKey: ({ id }) => id,
    getTitle: ({ title }) => title,
  },
};

export const WithMultiple: Story = {
  args: {
    ...Default.args,
    isMultiple: true,
  },
};

export const WithDisabled: Story = {
  args: {
    ...Default.args,
    disabledOptions: items.slice(1, 3),
  },
};

export const WithDefaultOptions: Story = {
  args: {
    ...Default.args,
    defaultOptions: items.slice(3, 5),
  },
};
