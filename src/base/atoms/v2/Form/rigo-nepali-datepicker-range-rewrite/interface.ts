import {
  InputProps,
  FormControlProps,
  FormHelperTextProps,
  FormLabelProps,
  TextProps,
} from "@chakra-ui/react";
import { ICalendarProps } from "./components/entities/model/models";

export interface ConnectFormProps {
  children: any;
}

export interface FormProviderProps {
  defaultValues?: Record<string, any>;
  children?: React.ReactNode;
  onSubmit?: any;
  showDevTool?: boolean;
}

export interface DatePickerProps extends Partial<ICalendarProps>, Record<string, any> {
  children?: React.ReactNode;
  name: string;
  label?: React.ReactNode;
  control?: any;
  isNepali?: boolean;
  errors?: any;
  required?: boolean;
  setError?: any;
  rule?: any;
  value?: any;
  onChange?: any;
  dateType?: string;
  disableDateBefore?: string;
  disableDateAfter?: string;
  disabledWeekDays?: number[];
  holidays?: string[];
}

export interface ComponentProps extends InputProps {
  onChangeRHF?: any;
}

export interface UncontrollerComponentProps extends InputProps {
  onChangeRHF?: any;
}

export type ControlledComponentProps = Partial<DatePickerProps> & Partial<InputProps>;

export type FormErrorLabelProps = TextProps;

export type FormLabelPropsType = FormLabelProps;

export type FormControlPropsType = FormControlProps;

export type FormHelperTextPropsType = FormHelperTextProps;
