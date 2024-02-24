import { FormLabel } from '../form-label';
import { FormLabelPropsType } from './interface';
import { useInput } from './useInput';

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useInput();
  if (label) {
    return <FormLabel label={`${label}`} {...props} />;
  }
  return null;
};
