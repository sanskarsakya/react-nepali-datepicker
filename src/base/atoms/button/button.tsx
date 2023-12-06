import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import {
  buttonSizes,
  buttonSizeType,
  buttonTypes,
  buttonTypesType,
} from "./buttonConstant";
import { commonButtonProps, commonButtonSizeProps } from "./commonButtonProps";

const buttonProps: any = {
  default: {
    h: "36px",
    padding: "0 15px",
    bg: "transparent",
    border: "1px solid transparent",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: 400,
  },
  ...commonButtonProps,
};

const buttonSizeProps: any = {
  ...commonButtonSizeProps,
};

interface ButtonProps extends ChakraButtonProps {
  buttonType?: buttonTypesType;
  buttonSize?: buttonSizeType;
}

export const Button = (props: ButtonProps) => {
  const { children, buttonType, buttonSize, ...rest } = props;

  const def = { ...buttonProps.default };

  const btnTypeFoundKey = Object.keys(buttonTypes).find(
    (key) => key === buttonType
  );
  const btnSizeFoundKey = Object.keys(buttonSizes).find(
    (key) => key === buttonSize
  );

  const mergedBtnProps = {
    ...def,
    ...(btnTypeFoundKey !== undefined && { ...buttonProps[btnTypeFoundKey] }),
    ...(btnSizeFoundKey !== undefined && {
      ...buttonSizeProps[btnSizeFoundKey],
    }),
  };

  return (
    <ChakraButton {...mergedBtnProps} {...rest}>
      {children}
    </ChakraButton>
  );
};

export default Button;
