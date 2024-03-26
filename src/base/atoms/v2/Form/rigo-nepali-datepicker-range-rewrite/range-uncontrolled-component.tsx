import dayjs from 'dayjs';
import { DatePicker } from './components/ui';
import { useDatePicker } from './use-date-picker';

export const RangeUncontrolledComponent = (props: any) => {

    const { onChangeRHF } = props;

    const context = useDatePicker();

    const {
        name,
        onChange: _onChange,
        ...contextRest
    } = context;

    const handleChange = (value: any) => {
        _onChange?.(name, value);
        onChangeRHF?.(value);
    };

    // let valueNormalized = {
    //     startDate: "",
    //     endDate: ""
    // };

    // if (control) {
    //     if (rhfValue) {
    //         valueNormalized = {
    //             startDate: dayjs(rhfValue.startDate).format('YYYY-MM-DD'),
    //             endDate: dayjs(rhfValue.endDate).format('YYYY-MM-DD')
    //         };
    //     } else {
    //         valueNormalized = rhfValue;
    //     }
    // } else {
    //     if (value) {
    //         valueNormalized = {
    //             startDate: dayjs(value.startDate).format('YYYY-MM-DD'),
    //             endDate: dayjs(value.endDate).format('YYYY-MM-DD')
    //         };
    //     } else {
    //         valueNormalized = value;
    //     }
    // }

    return (
        <DatePicker {...contextRest} value={{
            startDate: dayjs().add(10, "day").format("YYYY-MM-DD"),
            endDate: dayjs().add(20, "day").format("YYYY-MM-DD")
        }} onChange={handleChange} />
    );
};
