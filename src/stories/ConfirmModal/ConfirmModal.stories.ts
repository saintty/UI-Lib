import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmModal } from "./ConfirmModal";
import { ModalButton } from "./_decorators";

const meta: Meta<typeof ConfirmModal> = {
  title: "UI/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  decorators: [ModalButton],
};
