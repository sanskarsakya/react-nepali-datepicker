/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from 'react-hook-form';

import { ControlledComponentProps } from './interface';
import { RangeUncontrolledComponent } from './range-uncontrolled-component';
import { useDatePicker } from './use-date-picker';
import dayjs from 'dayjs';
import { ModeEnum } from './components/entities/model/models';
import { validate } from './components/store/utils';

export const RangeRhfComponent = (props: ControlledComponentProps) => {
    const context = useDatePicker();

    const { control, isRequired, required, name, setData, mode, ...contextProps } = context;

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
                        if (isRequired && (value.startDate === '' || value.endDate === '')) {
                            return 'Required';
                        } else {

                            if (value.startDate) {
                                const validation_result = validate(value.startDate, context.disableDateBefore, context.disableDateAfter);
                                if (validation_result.is_valid) {
                                    return true;
                                }
                                return "invalid date"
                            }
                            if (value.endDate) {
                                const validation_result = validate(value.endDate, context.disableDateBefore, context.disableDateAfter);
                                if (validation_result.is_valid) {
                                    return true;
                                }
                                return "invalid date"
                            }
                            if (!dayjs(value?.startDate).isBefore(dayjs(value?.endDate))) {
                                return "Start must be after end."
                            }
                        }
                    } else {
                        if (isRequired && value === '') {
                            return 'Required';
                        }

                        if (value) {
                            const validation_result = validate(value, context.disableDateBefore, context.disableDateAfter);
                            if (validation_result.is_valid) {
                                return true;
                            }
                            return "invalid date"
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
