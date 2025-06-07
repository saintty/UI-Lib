import type { Meta, StoryObj } from "@storybook/react";

import { ToastProvider } from "./ToastProvider";
import { ToastButtons } from "./_decorator";

const meta: Meta<typeof ToastProvider> = {
  title: "UI/Toast/ToastProvider",
  component: ToastProvider,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
  args: {
    children: <ToastButtons />,
  },
};
