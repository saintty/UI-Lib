import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ModalButton } from "./_decorators";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = { decorators: [ModalButton] };
