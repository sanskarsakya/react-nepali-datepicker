import { ComponentProps } from "./interface";
import { RangeRhfComponent } from "./range-rhf-component";
import { RangeUncontrolledComponent } from "./range-uncontrolled-component";
import { useDatePicker } from "./use-date-picker";

export const RangeComponent = (props: ComponentProps) => {
    const { control } = useDatePicker();

    if (control) {
        return <RangeRhfComponent {...props} />;
    }
    return <RangeUncontrolledComponent {...props} />;
};
