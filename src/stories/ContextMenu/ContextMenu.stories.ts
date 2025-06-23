import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenuDecorator } from "./_decorators";
import { ContextMenu } from "./ContextMenu";

const meta: Meta<typeof ContextMenu> = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  decorators: [ContextMenuDecorator],
};
