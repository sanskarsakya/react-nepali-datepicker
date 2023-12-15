import FormLabel from '../FormLabel';
import { FormLabelPropsType } from './interface';
import { useTextArea } from './use-textarea';

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useTextArea();
  return <FormLabel label={`${label}`} {...props} />;
};
