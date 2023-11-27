import {
  PxPriorityRhfComponent,
  PxReporterRhfComponent,
  RigoRhfComponent,
  PxStatusRhfComponent,
} from './RigoRhfComponent';
import {
  PxPriorityUncontrollerComponent,
  PxReporterUncontrollerComponent,
  PxStatusUncontrollerComponent,
  RigoUncontrollerComponent,
} from './RigoUncontrollerComponent';
import { useRigoSelect } from './useRigoSelect';

export const RigoComponent = (props: { onChangeRHF?: any; value?: any }) => {
  const { control } = useRigoSelect();

  if (control) {
    return <RigoRhfComponent {...props} />;
  }
  return <RigoUncontrollerComponent {...props} />;
};

export const PxStatusComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = useRigoSelect();

  if (control) {
    return <PxStatusRhfComponent {...props} />;
  }
  return <PxStatusUncontrollerComponent {...props} />;
};

export const PxPriorityComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = useRigoSelect();

  if (control) {
    return <PxPriorityRhfComponent {...props} />;
  }
  return <PxPriorityUncontrollerComponent {...props} />;
};

export const PxReporterComponent = (props: {
  onChangeRHF?: any;
  value?: any;
}) => {
  const { control } = useRigoSelect();

  if (control) {
    return <PxReporterRhfComponent {...props} />;
  }
  return <PxReporterUncontrollerComponent {...props} />;
};
