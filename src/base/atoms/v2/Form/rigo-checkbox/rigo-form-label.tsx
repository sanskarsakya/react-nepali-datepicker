import FormLabel from '../FormLabel';
import { FormLabelPropsType } from './interface';
import { useCheckbox } from './use-checkbox';

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useCheckbox();
  return <FormLabel label={`${label}`} {...props} />;
};
