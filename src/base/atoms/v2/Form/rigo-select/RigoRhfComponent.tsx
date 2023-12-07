import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import * as fromFormHelpers from '../@form-helper';
import { useRigoSelect } from './useRigoSelect';
import {
  PxPriorityUncontrollerComponent,
  PxReporterUncontrollerComponent,
  PxStatusUncontrollerComponent,
  RigoUncontrollerComponent,
} from './RigoUncontrollerComponent';

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
        // const isReturnScalarValue = context?.isReturnScalarValue ?? false
        // const isMulti = context?.isMulti ?? false

        const valueNormalized = value;

        // if (isReturnScalarValue && !isMulti) {
        //   valueNormalized = props?.options?.find((option: any) => option.value === value)
        // } else if (isReturnScalarValue && isMulti) {
        //   valueNormalized = props?.options?.filter((option: any) => value.includes(option.value))
        // }

        const handleChange = (val: any) => {
          // if (isReturnScalarValue && !isMulti) {
          //   onChange(val.value)
          // } else if (isReturnScalarValue && isMulti) {
          //   onChange(val?.map((option: any) => option.value))
          // } else {
          //   onChange(val)
          // }
          onChange(val)
        }

        return (
          <RigoUncontrollerComponent
            value={valueNormalized}
            onChangeRHF={handleChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxStatusRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = useRigoSelect();

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
          <PxStatusUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxPriorityRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = useRigoSelect();

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
          <PxPriorityUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxReporterRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = useRigoSelect();

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
          <PxReporterUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};
