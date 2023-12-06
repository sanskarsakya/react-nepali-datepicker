import { AddIcon } from "@chakra-ui/icons";
import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import { IconButton as RigoIconButton } from "./iconButton";
export default {
  title: "Base/Atoms/Icon Button",
  component: RigoIconButton,
  argTypes: {
    buttonSize: {
      control: { type: "radio" },
    },
  },
};

export const DefaultButton = (args: any) => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label={"Test aria"}
        onClick={action("clicked")}
        {...args}
      />
    </ChakraProvider>
  );
};

export const PrimaryButton = () => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label="Test"
        buttonType="primary"
        onClick={action("clicked")}
      >
        Button
      </RigoIconButton>
    </ChakraProvider>
  );
};

export const SecondaryButton = () => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label="Test"
        buttonType="secondary"
        onClick={action("clicked")}
      >
        Button
      </RigoIconButton>
    </ChakraProvider>
  );
};

export const DangerButton = () => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label="Test"
        buttonType="danger"
        onClick={action("clicked")}
      >
        Button
      </RigoIconButton>
    </ChakraProvider>
  );
};

export const SuccessButton = () => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label="Test"
        buttonType="success"
        onClick={action("clicked")}
      >
        Button
      </RigoIconButton>
    </ChakraProvider>
  );
};

export const WarningButton = () => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label="Test"
        buttonType="warning"
        onClick={action("clicked")}
      >
        Button
      </RigoIconButton>
    </ChakraProvider>
  );
};

export const DarkButton = () => {
  return (
    <ChakraProvider>
      <RigoIconButton
        icon={<AddIcon />}
        aria-label="Test"
        buttonType="dark"
        onClick={action("clicked")}
      >
        Button
      </RigoIconButton>
    </ChakraProvider>
  );
};
