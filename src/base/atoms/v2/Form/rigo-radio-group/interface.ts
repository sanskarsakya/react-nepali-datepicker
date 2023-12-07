import {
  FormHelperTextProps as RigoFormHelperTextProps,
  FormLabelProps as RigoFormLabelProps,
  TextProps,
} from "@chakra-ui/react";

export type FormLabelProps = RigoFormLabelProps;

export type FormHelperTextProps = RigoFormHelperTextProps;

export interface RadioGroupProps extends Record<string, any> {
  children?: React.ReactNode;
  name: string;
  label: React.ReactNode;
  control?: any;
  errors?: any;
  required?: boolean;
  rule?: any;
  options: any[];
  value?: any;
  onChange?: any;
  components?: any;
}

export type FormErrorLabelProps = TextProps;
// export type PxControlledComponentProps = InputProps;

export interface BaseComponentProps extends Record<string, any> {
  onChangeRHF?: any;
  value?: any;
}

export type ComponentProps = BaseComponentProps;
export type UncontrollerComponentProps = BaseComponentProps;
