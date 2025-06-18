import type { Meta, StoryObj } from "@storybook/react";

import { AsyncAutocomplete } from "./AsyncAutocomplete";
import { delay } from "../__utils/delay";

const meta: Meta<typeof AsyncAutocomplete> = {
  title: "UI/Inputs/AsyncAutocomplete",
  component: AsyncAutocomplete,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AsyncAutocomplete>;

const items = [
  { id: "1", title: "Apple", value: "apple" },
  { id: "11", title: "Apple2", value: "apple" },
  { id: "111", title: "Apple3", value: "apple" },
  { id: "q11", title: "qApple2", value: "apple" },
  { id: "q111", title: "qApple3", value: "apple" },
  { id: "q1", title: "qApple", value: "apple" },
  { id: "2", title: "Banana", value: "banana" },
  { id: "3", title: "Cherry2", value: "cherry" },
  { id: "22", title: "Banana2", value: "banana" },
  { id: "33", title: "Cherry3", value: "cherry" },
  { id: "222", title: "Banana3", value: "banana" },
  { id: "333", title: "Cherry4", value: "cherry" },
  { id: "q2", title: "Banana", value: "banana" },
  { id: "q3", title: "Cherry2", value: "cherry" },
  { id: "q22", title: "Banana2", value: "banana" },
  { id: "q33", title: "Cherry3", value: "cherry" },
  { id: "q222", title: "Banana3", value: "banana" },
  { id: "q333", title: "Cherry4", value: "cherry" },
];

export const Default: Story = {
  args: {
    label: "Выбранные фрукты",
    getKey: ({ id }) => id,
    getTitle: ({ title }) => title,
    getItems: (page: number, perPage: number, search: string) =>
      delay(
        items
          .slice(0, perPage)
          .filter(({ title }) => title.includes(search))
          .map((item) => ({
            ...item,
            id: `${page}${item.id}`,
            title: `${item.title}-p${page}`,
          }))
      ),
  },
};

export const WithDefaultSearch: Story = {
  args: {
    ...Default.args,
    defaultSearch: "App",
  },
};
