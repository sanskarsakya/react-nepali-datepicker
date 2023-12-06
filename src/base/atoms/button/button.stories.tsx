import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "./button";
export default {
  title: "Base/Atoms/Button",
  component: RigoButton,
};

export const ButtonStory = (props: any) => {
  return (
    <ChakraProvider>
      <RigoButton {...props} onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};

ButtonStory.bind({});
