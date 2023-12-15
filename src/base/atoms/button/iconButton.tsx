import React from "react"
import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/react"
import {
  buttonSizes,
  buttonSizeType,
  buttonTypes,
  buttonTypesType,
} from "./buttonConstant"
import { commonButtonProps, commonButtonSizeProps } from "./commonButtonProps"

const buttonProps: any = {
  default: {
    h: "38px",
    padding: "0 12px",
    bg: "transparent",
    border: "1px solid transparent",
    borderRadius: "3px",
    fontSize: "16px",
    fontWeight: 400,
    minWidth: "auto",
  },
  ...commonButtonProps,
}

const buttonSizeProps: any = {
  ...commonButtonSizeProps,
}

interface ButtonProps extends ChakraIconButtonProps {
  buttonType?: buttonTypesType
  buttonSize?: buttonSizeType
}

export const IconButton = (props: ButtonProps) => {
  const { children, buttonType, buttonSize, ...rest } = props

  let def = { ...buttonProps.default }

  const btnTypeFoundKey = Object.keys(buttonTypes).find(
    key => key === buttonType,
  )
  const btnSizeFoundKey: any = Object.keys(buttonSizes).find(
    key => key === buttonSize,
  )

  const mergedBtnProps = {
    ...def,
    ...(btnTypeFoundKey !== undefined && { ...buttonProps[btnTypeFoundKey] }),
    ...(btnSizeFoundKey !== undefined && {
      ...buttonSizeProps[btnSizeFoundKey],
    }),
  }
  return (
    <ChakraIconButton {...mergedBtnProps} {...rest}>
      {children}
    </ChakraIconButton>
  )
}

export default IconButton
