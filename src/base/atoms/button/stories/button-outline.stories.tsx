import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "../button";
export default {
  title: "Base/Atoms/Button/Outline",
  component: RigoButton,
};

export const Primary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="outline-primary" onClick={action("clicked")}>
        Primary Outline
      </RigoButton>
    </ChakraProvider>
  );
};
export const Secondary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="outline-secondary" onClick={action("clicked")}>
        Secondary Outline
      </RigoButton>
    </ChakraProvider>
  );
};
export const Danger = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="outline-danger" onClick={action("clicked")}>
        Danger Outline
      </RigoButton>
    </ChakraProvider>
  );
};
export const Warning = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="outline-warning" onClick={action("clicked")}>
        Warning Outline
      </RigoButton>
    </ChakraProvider>
  );
};
export const Success = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="outline-success" onClick={action("clicked")}>
        Success Outline
      </RigoButton>
    </ChakraProvider>
  );
};

export const Dark = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="outline-dark" onClick={action("clicked")}>
        Dark Outline
      </RigoButton>
    </ChakraProvider>
  );
};
