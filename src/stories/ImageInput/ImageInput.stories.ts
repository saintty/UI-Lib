import type { Meta, StoryObj } from "@storybook/react";

import { ImageInput } from "./ImageInput";

const meta: Meta<typeof ImageInput> = {
  title: "UI/Inputs/ImageInput",
  component: ImageInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {
    label: "Нажмите чтобы выбрать изображение",
  },
};

export const WithError: Story = {
  args: {
    label: "Нажмите чтобы выбрать изображение",
    error: "Недопустимый размер файла",
  },
};

export const WithFileSizeValidation: Story = {
  args: {
    label: "Нажмите чтобы выбрать изображение",
    maxFileSize: 1024 * 128,
  },
};
