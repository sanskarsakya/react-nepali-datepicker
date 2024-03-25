/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from 'react-hook-form';

import { ControlledComponentProps } from './interface';
import { RangeUncontrolledComponent } from './range-uncontrolled-component';
import { useDatePicker } from './use-date-picker';
import dayjs from 'dayjs';
import { ModeEnum } from './components/entities/model/models';

export const RangeRhfComponent = (props: ControlledComponentProps) => {
    const context = useDatePicker();

    const { control, required, name, setData, mode, ...contextProps } = context;

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: {
                    value: required,
                    message: 'Required',
                },
                validate: (value) => {
                    if (mode === ModeEnum.RANGE) {
                        if (value.startDate === '' || value.endDate === '') {
                            return 'Required';
                        } else {
                            return dayjs(value?.start_date).isBefore(dayjs(value?.end_date)) ? "Start must be after end." : true;
                        }
                    }

                    return true;
                }
            }}
            render={({ field: { onChange, value } }) => (
                <RangeUncontrolledComponent
                    isRhfBound={true}
                    onChangeRHF={onChange}
                    {...contextProps}
                    {...props}
                    value={value}
                />
            )}
        />
    );
};
