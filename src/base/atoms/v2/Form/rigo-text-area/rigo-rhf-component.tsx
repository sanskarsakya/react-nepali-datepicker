import { Controller } from 'react-hook-form';
import isEmpty from 'lodash/isEmpty';

import * as fromFormHelpers from '../@form-helper';
import { ControlledComponentProps } from './interface';
import { useTextArea } from './use-textarea';
import { RigoUncontrolledComponent } from './rigo-uncontrolled-component';

export const RigoRhfComponent = (props: ControlledComponentProps) => {
  const { control, rule, name, required } = useTextArea();
  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromFormHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => (
        <RigoUncontrolledComponent
          value={value}
          onChangeRHF={onChange}
          {...props}
        />
      )}
    />
  );
};
