import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "../button";
import { ChakraProvider } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
export default {
  title: "Base/Atoms/Button/Fill",
  component: RigoButton,
};

export const Primary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="primary" onClick={action("clicked")}>
        Button
      </RigoButton>
    </ChakraProvider>
  );
};
export const Secondary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="secondary" onClick={action("clicked")}>
        Secondary Button
      </RigoButton>
    </ChakraProvider>
  );
};
export const Danger = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="danger" onClick={action("clicked")}>
        Danger Button
      </RigoButton>
    </ChakraProvider>
  );
};
export const Warning = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="warning" onClick={action("clicked")}>
        Warning Button
      </RigoButton>
    </ChakraProvider>
  );
};
export const Success = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="success" onClick={action("clicked")}>
        Success Button
      </RigoButton>
    </ChakraProvider>
  );
};

export const Dark = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="dark" onClick={action("clicked")}>
        Dark Button
      </RigoButton>
    </ChakraProvider>
  );
};
