import {
  InputProps,
  NumberInputProps,
  FormControlProps,
  FormHelperTextProps,
  FormLabelProps,
  TextProps,
} from "@chakra-ui/react";

export interface ConnectFormProps {
  children: any;
}

export interface FormProviderProps {
  defaultValues?: Record<string, any>;
  children?: React.ReactNode;
  onSubmit?: any;
  showDevTool?: boolean;
}

export interface InputNumberProps {
  children?: React.ReactNode;
  name: string;
  label: React.ReactNode;
  control?: any;
  errors?: any;
  required?: boolean;
  rule?: any;
  value?: any;
  onChange?: any;
}

export interface ComponentProps extends InputProps {
  onChangeRHF?: any;
}

export interface UncontrollerComponentProps extends InputProps {
  onChangeRHF?: any;
}

export type ControlledComponentProps = InputProps;

export type FormErrorLabelProps = TextProps;

export type FormLabelPropsType = FormLabelProps;

export type FormControlPropsType = FormControlProps;

export type FormHelperTextPropsType = FormHelperTextProps;
