import type { Meta, StoryObj } from "@storybook/react";

import { Feed } from "./Feed";
import { FeedWrapper } from "./_decorators";

const meta: Meta<typeof Feed> = {
  title: "UI/Feed",
  component: Feed,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Feed>;

export const Default: Story = { decorators: [FeedWrapper] };
