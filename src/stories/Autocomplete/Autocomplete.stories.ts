import type { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "./Autocomplete";
import { AutocompleteDecorator } from "./_decorators";

const meta: Meta<typeof Autocomplete> = {
  title: "UI/Inputs/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  decorators: [AutocompleteDecorator],
};

// export const WithMultiselect: Story = {
//   args: {
//     ...Default.args,
//     isMultiple: true,
//   },
// };

// export const WithError: Story = {
//   args: {
//     ...Default.args,
//     error: "Неверно выбран вариант ответа",
//   },
// };

// export const WithDisabledOptions: Story = {
//   args: {
//     ...Default.args,
//     disabledOptions: items.slice(3, 5),
//   },
// };

// export const WithDefaultOptions: Story = {
//   args: {
//     ...Default.args,
//     isMultiple: true,
//     disabledOptions: items.slice(3, 5),
//   },
// };
