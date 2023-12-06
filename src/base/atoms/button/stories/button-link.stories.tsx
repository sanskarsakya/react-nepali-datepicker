import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "../button";
export default {
  title: "Base/Atoms/Button/Link",
  component: RigoButton,
};
export const Primary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="link-primary" onClick={action("clicked")}>
        Primary link
      </RigoButton>
    </ChakraProvider>
  );
};
export const Secondary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="link-secondary" onClick={action("clicked")}>
        Secondary link
      </RigoButton>
    </ChakraProvider>
  );
};
export const Danger = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="link-danger" onClick={action("clicked")}>
        Danger link
      </RigoButton>
    </ChakraProvider>
  );
};
export const Warning = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="link-warning" onClick={action("clicked")}>
        Warning link
      </RigoButton>
    </ChakraProvider>
  );
};
export const Success = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="link-success" onClick={action("clicked")}>
        Success link
      </RigoButton>
    </ChakraProvider>
  );
};

export const Dark = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="link-dark" onClick={action("clicked")}>
        Dark link
      </RigoButton>
    </ChakraProvider>
  );
};
