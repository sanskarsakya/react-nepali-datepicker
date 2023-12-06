import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { Button as RigoButton } from "../button";
export default {
  title: "Base/Atoms/Button/Stroked",
  component: RigoButton,
};
export const Primary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="stroked-primary" onClick={action("clicked")}>
        Primary stroked
      </RigoButton>
    </ChakraProvider>
  );
};
export const Secondary = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="stroked-secondary" onClick={action("clicked")}>
        Secondary stroked
      </RigoButton>
    </ChakraProvider>
  );
};
export const Danger = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="stroked-danger" onClick={action("clicked")}>
        Danger stroked
      </RigoButton>
    </ChakraProvider>
  );
};
export const Warning = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="stroked-warning" onClick={action("clicked")}>
        Warning stroked
      </RigoButton>
    </ChakraProvider>
  );
};
export const Success = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="stroked-success" onClick={action("clicked")}>
        Success stroked
      </RigoButton>
    </ChakraProvider>
  );
};

export const Dark = () => {
  return (
    <ChakraProvider>
      <RigoButton buttonType="stroked-dark" onClick={action("clicked")}>
        Dark stroked
      </RigoButton>
    </ChakraProvider>
  );
};
