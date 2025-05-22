import type { Preview } from "@storybook/react";

import { CenterDecorator } from "./../src/stories/__decorators/CenterDecorator";

const preview: Preview = {
  decorators: [CenterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
