import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { SidebarDecorator } from "./_decorators";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  decorators: [SidebarDecorator],
};
