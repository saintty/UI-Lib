import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Inputs/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Select>;

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
    label: "Выбранные фрукты",
    options: items,
    getKey: ({ id }) => id,
    getTitle: ({ title }) => title,
  },
};

export const WithMultiselect: Story = {
  args: {
    ...Default.args,
    isMultiple: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "Неверно выбран вариант ответа",
  },
};
