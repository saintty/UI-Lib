import type { Meta, StoryObj } from "@storybook/react";

import { Wizard } from "./Wizard";
import { WizardDecorator } from "./_decorators";

const meta: Meta<typeof Wizard> = {
  title: "UI/Wizard",
  component: Wizard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Wizard>;

export const Default: Story = {
  decorators: [WizardDecorator],
};
