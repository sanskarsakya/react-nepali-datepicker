import { Button, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import NepaliDatepickerRangeV2 from '.';
import { FormProvider } from '../form-provider';
import { ConnectForm } from '../connect-form';
import { ADToBS } from '../rigo-nepali-datepicker/components/nepali-date-carburetor';
import dayjs from 'dayjs';

const meta: Meta<typeof NepaliDatepickerRangeV2> = {
  component: NepaliDatepickerRangeV2,
  title: 'V2/Forms/Nepali Date Picker Range V2 Rewrite',
};

export default meta;

const today = dayjs().format("YYYY-MM-DD");

const argsBase = {
  value: {
    startDate: dayjs(today).add(1, "month").format("YYYY-MM-DD"),
    endDate: dayjs(today).add(1, "month").format("YYYY-MM-DD")
  },
  isNepali: true,
  disableDateBefore: dayjs(today).subtract(1, "month").format("YYYY-MM-DD"),
  disableDateAfter: dayjs(today).add(1, "month").format("YYYY-MM-DD"),
}

export const EngDefault = {
  args: argsBase,

  render: (args: any) => {
    return (
      <FormProvider
        onSubmit={(data: any) => {
          console.log(JSON.stringify(data, null, 2));
        }}
        defaultValues={{
          composed: args.value,
        }}
      >
        <ConnectForm>
          {(formProps: any) => {
            const {
              setError,
              trigger,
              control,
              formState: { errors },
            } = formProps;

            const inputProps = {
              control,
              errors,
              setError,
              trigger,
            };

            return (
              <Flex gap={2} direction="column">
                <pre>{JSON.stringify(errors, null, 2)}</pre>

                <NepaliDatepickerRangeV2.Default
                  name='composed'
                  label='Composed And RHF Controlled'
                  required
                  {...args}
                  {...inputProps}
                />

                <Flex>
                  <Button type='submit'>Submit</Button>
                </Flex>
              </Flex>
            );
          }}
        </ConnectForm>
      </FormProvider>
    );
  },
};

export const EnglishComposed = {
  args: argsBase,

  render: (args: any) => {
    return (
      <FormProvider
        onSubmit={(data: any) => {
          console.log(JSON.stringify(data, null, 2));
        }}
        defaultValues={{
          composed: args.value,
        }}
      >
        <ConnectForm>
          {(formProps: any) => {
            const {
              setError,
              trigger,
              control,
              formState: { errors },
            } = formProps;

            const inputProps = {
              control,
              errors,
              setError,
              trigger,
            };

            return (
              <Flex gap={2} direction="column">

                <NepaliDatepickerRangeV2
                  name='composed'
                  label='Composed And RHF Controlled'
                  required
                  {...args}
                  {...inputProps}
                >
                  <NepaliDatepickerRangeV2.FormControl>
                    <Flex gap={2}>
                      <NepaliDatepickerRangeV2.FormLabel />
                    </Flex>
                    <NepaliDatepickerRangeV2.Component />
                    <NepaliDatepickerRangeV2.HelperText />
                    <NepaliDatepickerRangeV2.ErrorLabel />
                  </NepaliDatepickerRangeV2.FormControl>
                </NepaliDatepickerRangeV2>

                <Flex>
                  <Button type='submit'>Submit</Button>
                </Flex>
              </Flex>
            );
          }}
        </ConnectForm>
      </FormProvider>
    );
  },
};

export const EnglishDefaultUncontrolled = {
  args: argsBase,

  render: (args: any) => {

    return (
      <NepaliDatepickerRangeV2.Default
        name='composed'
        label='Default Uncotrolled'
        {...args}
        onChange={(_: string, value: string) => {
          console.log(value)
        }}
      />
    );
  },
};

export const EnglishComposedUncontrolled = {
  args: argsBase,

  render: (args: any) => {

    return (
      <NepaliDatepickerRangeV2
        name='composed'
        label='Composed And Uncontrolled'
        {...args}
        onChange={(_: string, value: string) => {
          console.log(value)
        }}
      >
        <NepaliDatepickerRangeV2.FormControl>
          <Flex gap={2}>
            <NepaliDatepickerRangeV2.FormLabel />
          </Flex>
          <NepaliDatepickerRangeV2.Component />
          <NepaliDatepickerRangeV2.HelperText />
          <NepaliDatepickerRangeV2.ErrorLabel />
        </NepaliDatepickerRangeV2.FormControl>
      </NepaliDatepickerRangeV2>
    );
  },
};

const argsBaseNepali = {
  ...argsBase,
  value: {
    startDate: ADToBS(today),
    endDate: ADToBS(today)
  },
  disableDateBefore: ADToBS(dayjs(today).subtract(1, "month").format("YYYY-MM-DD")),
  disableDateAfter: ADToBS(dayjs(today).add(1, "month").format("YYYY-MM-DD")),
  isNepali: true,
}

export const NepaliDefault = {
  args: argsBaseNepali,

  render: (args: any) => {
    return (
      <FormProvider
        onSubmit={(data: any) => {
          console.log(JSON.stringify(data, null, 2));
        }}
        defaultValues={{
          composed: args.value,
        }}
      >
        <ConnectForm>
          {(formProps: any) => {
            const {
              setError,
              trigger,
              control,
              formState: { errors },
            } = formProps;

            const inputProps = {
              control,
              errors,
              setError,
              trigger,
              dateType: args.dateType,
              disableDateBefore: args.disableDateBefore,
              disableDateAfter: args.disableDateAfter,
            };

            return (
              <Flex gap={2} direction="column">

                <NepaliDatepickerRangeV2.Default
                  name='composed'
                  label='Composed And RHF Controlled'
                  disable_date_before={args.disableDateBefore}
                  disable_date_after={args.disableDateAfter}
                  is_dark={args.is_dark}
                  is_nepali={args.is_nepali}
                  required
                  {...inputProps}
                />

                <Flex>
                  <Button type='submit'>Submit</Button>
                </Flex>
              </Flex>
            );
          }}
        </ConnectForm>
      </FormProvider>
    );
  },
};

export const NepaliComposed = {
  args: argsBaseNepali,

  render: (args: any) => {
    return (
      <FormProvider
        onSubmit={(data: any) => {
          console.log(JSON.stringify(data, null, 2));
        }}
        defaultValues={{
          composed: args.value,
        }}
      >
        <ConnectForm>
          {(formProps: any) => {
            const {
              setError,
              trigger,
              control,
              formState: { errors },
            } = formProps;

            const inputProps = {
              control,
              errors,
              setError,
              trigger,
              dateType: args.dateType,
              disableDateBefore: args.disableDateBefore,
              disableDateAfter: args.disableDateAfter,
            };

            return (
              <Flex gap={2} direction="column">

                <NepaliDatepickerRangeV2
                  name='composed'
                  label='Composed And RHF Controlled'
                  disable_date_before={args.disableDateBefore}
                  disable_date_after={args.disableDateAfter}
                  is_dark={args.is_dark}
                  is_nepali={args.is_nepali}
                  required
                  {...inputProps}
                >
                  <NepaliDatepickerRangeV2.FormControl>
                    <Flex gap={2}>
                      <NepaliDatepickerRangeV2.FormLabel />
                    </Flex>
                    <NepaliDatepickerRangeV2.Component />
                    <NepaliDatepickerRangeV2.HelperText />
                    <NepaliDatepickerRangeV2.ErrorLabel />
                  </NepaliDatepickerRangeV2.FormControl>
                </NepaliDatepickerRangeV2>

                <Flex>
                  <Button type='submit'>Submit</Button>
                </Flex>
              </Flex>
            );
          }}
        </ConnectForm>
      </FormProvider>
    );
  },
};

export const NepaliDefaultUncontrolled = {
  args: argsBaseNepali,

  render: (args: any) => {
    const inputProps = {
      dateType: args.dateType,
      disableDateBefore: args.disableDateBefore,
      disableDateAfter: args.disableDateAfter,
    };

    return (
      <NepaliDatepickerRangeV2.Default
        name='composed'
        label='Default Uncontrolled'
        disable_date_before={args.disableDateBefore}
        disable_date_after={args.disableDateAfter}
        is_dark={args.is_dark}
        is_nepali={args.is_nepali}
        disabledWeekDays={[1, 2]}
        holidays={["2024-01-25"]}
        onChange={(_: string, value: string) => {
          console.log(value)
        }}
        {...inputProps}
      />
    );
  },
};

export const NepaliComposedUncontrolled = {
  args: argsBaseNepali,

  render: (args: any) => {
    const inputProps = {
      dateType: args.dateType,
      disableDateBefore: args.disableDateBefore,
      disableDateAfter: args.disableDateAfter,
    };

    return (
      <NepaliDatepickerRangeV2
        name='composed'
        label='Composed And Uncontrolled'
        disable_date_before={args.disableDateBefore}
        disable_date_after={args.disableDateAfter}
        is_dark={args.is_dark}
        disabledWeekDays={[1, 2]}
        holidays={["2024-01-25"]}
        is_nepali={args.is_nepali}
        onChange={(_: string, value: string) => {
          console.log(value)
        }}
        {...inputProps}
      >
        <NepaliDatepickerRangeV2.FormControl>
          <Flex gap={2}>
            <NepaliDatepickerRangeV2.FormLabel />
          </Flex>
          <NepaliDatepickerRangeV2.Component />
          <NepaliDatepickerRangeV2.HelperText />
          <NepaliDatepickerRangeV2.ErrorLabel />
        </NepaliDatepickerRangeV2.FormControl>
      </NepaliDatepickerRangeV2>
    );
  },
};
