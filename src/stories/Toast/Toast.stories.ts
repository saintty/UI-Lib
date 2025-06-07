import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";
import { ToastBound } from "./_decorator";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast/Toast",
  component: Toast,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  decorators: [ToastBound],
  args: {
    message: "Идет процесс выполнения",
    level: "info",
  },
};

export const WithErrorLevel: Story = {
  decorators: Default.decorators,
  args: {
    message: "Произошла ошибка",
    level: "error",
  },
};

export const WithWarningLevel: Story = {
  decorators: Default.decorators,

  args: {
    message: "Обратите внимание",
    level: "warning",
  },
};

export const WithSuccessLevel: Story = {
  decorators: Default.decorators,
  args: {
    message: "Успешно выполнено",
    level: "success",
  },
};
