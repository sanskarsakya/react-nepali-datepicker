import { Button, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { ConnectForm } from '../../connect-form';
import { FormProvider } from '../../form-provider';
import NepaliDatepickerRangeV2 from '..';

const meta: Meta<typeof NepaliDatepickerRangeV2> = {
    component: NepaliDatepickerRangeV2,
    title: 'V2/Forms/Nepali Date Picker/ Range',
};

export default meta;

const today = dayjs().format("YYYY-MM-DD");

const argsBase = {
    date: {
        startDate: dayjs(today).add(1, "month").format("YYYY-MM-DD"),
        endDate: dayjs(today).add(1, "month").format("YYYY-MM-DD")
    },
    isNepali: false,
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

                                <NepaliDatepickerRangeV2.RangeDefault
                                    name='default'
                                    label='Default'
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
