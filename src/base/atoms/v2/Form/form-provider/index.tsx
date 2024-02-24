import { DevTool } from '@hookform/devtools';
import { FormProvider as RHFFormProvider, useForm } from 'react-hook-form';

/* eslint-disable-next-line */
export interface PzFormProviderProps {
  defaultValues?: any;
  children?: any;
  onSubmit?: any;
  showDevTool?: boolean;
}

export function FormProvider(props: PzFormProviderProps) {
  const { defaultValues, children, showDevTool = false, onSubmit } = props;
  const methods = useForm({ mode: 'onSubmit', defaultValues: defaultValues, shouldUseNativeValidation: false });

  return (
    <RHFFormProvider {...methods}>
      {showDevTool && <DevTool control={methods.control} />}

      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>{children}</form>
    </RHFFormProvider>
  );
}

