import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "./Pagination";
import { PaginationDecorator } from "./_decorators";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  decorators: [PaginationDecorator],
};
