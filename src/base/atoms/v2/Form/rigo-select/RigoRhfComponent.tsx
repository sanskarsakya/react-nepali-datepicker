import { isEmpty } from 'lodash';
import { Controller } from 'react-hook-form';
import * as fromFormHelpers from '../@form-helper';
import {
  RigoUncontrollerComponent
} from './RigoUncontrollerComponent';
import { useRigoSelect } from './useRigoSelect';

export const RigoRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const context = useRigoSelect();
  const { control, rule, name, required } = context
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromFormHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <RigoUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};
 