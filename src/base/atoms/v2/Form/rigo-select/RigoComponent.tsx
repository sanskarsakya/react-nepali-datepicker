import {
  RigoRhfComponent,
  RigoRhfCreatableComponent
} from './RigoRhfComponent';
import {
  RigoCreatableUncontrolledComponent,
  RigoUncontrollerComponent
} from './RigoUncontrollerComponent';

import { useRigoSelect } from './useRigoSelect';

export const RigoCreateableComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = useRigoSelect();

  if (control) {
    return <RigoRhfCreatableComponent {...props} />;
  }
  return <RigoCreatableUncontrolledComponent {...props} />;
};


export const RigoComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = useRigoSelect();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrollerComponent {...props} />;
};

