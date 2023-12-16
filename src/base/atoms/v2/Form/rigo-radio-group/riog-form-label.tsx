import { FormLabel } from "../form-label";
import { FormLabelProps } from "./interface";
import { useRadioGroup } from "./use-radio-group";

export const RigoFormLabel = (props: FormLabelProps) => {
  const { label } = useRadioGroup();
  return <FormLabel label={`${label}`} {...props} />;
};
