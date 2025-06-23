import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
};
export default meta;

type User = {
  username: string;
  email: string;
  post: string;
};

type Story = StoryObj<typeof Table<User>>;

const users: User[] = [
  { username: "Alice", email: "alice@example.com", post: "Admin" },
  { username: "Bob", email: "bob@example.com", post: "User" },
  { username: "Charlie", email: "charlie@example.com", post: "Editor" },
];

export const Default: Story = {
  args: {
    columns: [
      { key: "username", label: "Username" },
      { key: "email", label: "Email" },
      { key: "post", label: "Post" },
    ],
    items: users,
  },
};

export const WithCaption: Story = {
  args: {
    ...Default.args,
    caption: "Users",
  },
};
