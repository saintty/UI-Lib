import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Story = StoryObj<typeof Tabs<Tab>>;

const tabs: Tab[] = [
  {
    id: "1",
    title: "Tab 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, repellendus voluptas? Tenetur et nisi alias esse. Dolor blanditiis illum voluptas cumque tempore quasi, voluptatum soluta non in nihil nisi veniam incidunt quos, libero omnis iusto sapiente itaque earum reprehenderit inventore? Eveniet facere quos, ea omnis vero aliquam nihil reprehenderit. Placeat.",
  },
  {
    id: "2",
    title: "Tab 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, repellendus voluptas? Tenetur et nisi alias esse. Dolor blanditiis illum voluptas cumque tempore quasi, voluptatum soluta non",
  },
  {
    id: "3",
    title: "Tab 3",
    content:
      "Roluptas cumque tempore quasi, voluptatum soluta non in nihil nisi veniam incidunt quos, libero omnis iusto sapiente itaque earum reprehenderit inventore? Eveniet facere quos, ea omnis vero aliquam nihil reprehenderit. Placeat.",
  },
  {
    id: "4",
    title: "Tab 4",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, repellendus voluptas? Tenetur et nisi alias esse. Dolor blanditiis illum voluptas cumque tempore quasi, voluptatum soluta non in nihil nisi veniam incidunt quos, libero omnis iusto sapiente itaque earum reprehenderit inventore? Eveniet facere quos, ea omnis vero aliquam nihil reprehenderit. Placeat.",
  },
  {
    id: "5",
    title: "Tab 5",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, repellendus voluptas? Tenetur et nisi alias esse. Dolor blanditiis illum voluptas cumque tempore quasi, voluptatum soluta non",
  },
  {
    id: "6",
    title: "Tab 6",
    content:
      "Roluptas cumque tempore quasi, voluptatum soluta non in nihil nisi veniam incidunt quos, libero omnis iusto sapiente itaque earum reprehenderit inventore? Eveniet facere quos, ea omnis vero aliquam nihil reprehenderit. Placeat.",
  },
];

export const Default: Story = {
  args: {
    tabs,
    getTabKey: ({ id }) => id,
    getTabTitle: ({ title }) => title,
    getTabPanel: ({ content }) => content,
  },
};

export const WithDisabled: Story = {
  args: {
    ...Default.args,
    disabledKeys: [tabs[1].id],
  },
};
