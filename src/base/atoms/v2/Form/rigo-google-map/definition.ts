import {
  FormControlProps,
  FormHelperTextProps,
  FormLabelProps,
  InputProps,
  TextProps
} from "@chakra-ui/react";

export interface GoogleMapProps {
  children?: JSX.Element | JSX.Element[];

  name: string;

  label: string;

  /**
   * undefined in non rhf mode
   */
  control?: any;

  /**
   * undefined in non rhf mode
   */
  errors?: any;

  /**
   * should value be required
   */
  required?: boolean;

  /**
   * undefined in rhf mode
   * is derived from default values thru rhf form
   */
  value?: {lat:number, lng:number};

  /**
   * onChange callback
   */
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
