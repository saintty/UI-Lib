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
