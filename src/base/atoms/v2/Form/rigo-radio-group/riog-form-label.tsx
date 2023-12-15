import Label from "../FormLabel";
import { FormLabelProps } from "./interface";
import { useRadioGroup } from "./use-radio-group";

export const RigoFormLabel = (props: FormLabelProps) => {
  const { label } = useRadioGroup();
  return <Label label={`${label}`} {...props} />;
};
