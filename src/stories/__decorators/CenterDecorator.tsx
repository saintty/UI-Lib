import type { Decorator } from "@storybook/react";

import "./../__styles/global.scss";

export const CenterDecorator: Decorator = (Story, context) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...(context.viewMode !== "docs" && {
        height: "calc(100vh - 2rem)",
      }),
    }}
  >
    <Story />
  </div>
);
