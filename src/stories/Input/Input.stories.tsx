import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import Image from "next/image";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

const icon = (
  <Image
    src="/file.svg"
    alt=""
    width={20}
    height={20}
    style={{ display: "block" }}
  />
);

export const Default: Story = {
  args: {
    label: "Email",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Email",
    defaultValue: "example@email.com",
  },
};

export const WithErrorValue: Story = {
  args: {
    label: "Email",
    value: "example@email.com",
    error: "Неверный формат электронной почты",
  },
};

export const WithDisabled: Story = {
  args: {
    ...WithDefaultValue.args,
    isDisabled: true,
  },
};

export const WithEndContent: Story = {
  args: {
    ...WithDefaultValue.args,
    endContent: icon,
  },
};

export const WithStartContent: Story = {
  args: {
    ...WithDefaultValue.args,
    defaultValue: "",
    startContent: icon,
  },
};
