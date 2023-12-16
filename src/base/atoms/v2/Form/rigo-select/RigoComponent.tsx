import {
  RigoRhfComponent
} from './RigoRhfComponent';
import {
  RigoUncontrollerComponent
} from './RigoUncontrollerComponent';
import { useRigoSelect } from './useRigoSelect';

export const RigoComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = useRigoSelect();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrollerComponent {...props} />;
};
 