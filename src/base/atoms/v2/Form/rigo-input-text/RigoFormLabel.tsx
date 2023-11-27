import { FormLabel } from "../form-label";
import { FormLabelPropsType } from "./interface";
import { useInput } from "./useInput";

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useInput();
  return <FormLabel label={`${label}`} {...props} />;
};
