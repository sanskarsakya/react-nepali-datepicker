import * as fromHelpers from "../@form-helper";
import { FormErrorLable } from "../form-error-label";
import { FormErrorLabelProps } from "./interface";
import { useRadioGroup } from "./use-radio-group";

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required } = useRadioGroup();

  if (!required) {
    return null;
  }

  const error =
    errors && fromHelpers.resolveObjectValueByPath(errors, name)?.message;

  return (
    <FormErrorLable
      py='2px'
      px={1}
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
