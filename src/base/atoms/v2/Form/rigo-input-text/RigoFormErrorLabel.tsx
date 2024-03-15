import * as fromFormHelpers from "../@form-helper";
import { FormErrorLable } from "../form-error-label";
import { FormErrorLabelProps } from "./interface";
import { useInput } from "./useInput";

export const RigoFormErrorLabel = (props: FormErrorLabelProps) => {
  const { name, errors, required, errorMessage } = useInput();

  const error =
    (errors && fromFormHelpers.resolveObjectValueByPath(errors, name)?.message) || errorMessage
    if (!error) {
      return null;
    }
  return (
    <FormErrorLable
      fontSize='14px'
      message={error}
      {...props}
    />
  );
};
