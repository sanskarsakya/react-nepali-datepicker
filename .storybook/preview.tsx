import type { Preview } from "@storybook/react";
import { ChakraProvider } from '@chakra-ui/react';

import React from "react";
const preview: Preview = {
  decorators: [
    (Story: any) => {
      return (
        <ChakraProvider>
          <Story />
        </ChakraProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
