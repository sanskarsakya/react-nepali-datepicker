import { FormLabel } from '../form-label';
import { FormLabelPropsType } from './definition';
import { useGoogleMap } from './use-google-map';

export const RigoFormLabel = (props: FormLabelPropsType) => {
  const { label } = useGoogleMap();
  return <FormLabel label={`${label}`} {...props} />;
};
