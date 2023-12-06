import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "../button";
export default {
  title: "Base/Atoms/Button/Ghost",
  component: RigoButton,
};

export const Primary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="ghost-primary" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};

export const Secondary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="ghost-secondary" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};

export const Danger = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="ghost-danger" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};

export const Warning = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="ghost-warning" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};

export const Success = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="ghost-success" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};

export const Dark = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="ghost-dark" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};
