import { FormLabel } from '../form-label';
import { FormLabelPropsType } from './interface';
import { useTextArea } from './use-textarea';

type RigoFormLabelProps  = FormLabelPropsType & Record<string, any>
export const RigoFormLabel = (props: RigoFormLabelProps) => {
  const { label } = useTextArea();
  return <FormLabel label={`${label}`} {...props} />;
};
