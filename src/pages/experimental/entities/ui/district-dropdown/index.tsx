import * as fromDistrictStore from "../../model/distroct/use-district-store"
import SelectV2 from "../../../../../base/atoms/v2/Form/rigo-select"
import React from "react";


export const DistrictDropdown = (props: any) => {
    const { watch, reset } = props

    const options = fromDistrictStore.useDistrictStore(fromDistrictStore.selectItems)
    const fetchDistricts = fromDistrictStore.useDistrictStore(fromDistrictStore.fetch)

    React.useEffect(() => {
        const subscription =
            watch &&
            watch((value: any, { name }: any) => {
                if (name === props.provinceName) {
                    fetchDistricts(value[name].value)
                }
                if (props.resetList.includes(name)) {
                    reset({
                        ...value,
                        [props.name]: null
                    })
                }
            });

        return () => subscription.unsubscribe();
    }, [watch, reset, fetchDistricts]);


    return <SelectV2
        name={props.name}
        label="Districts"
        options={options}
        isReturnScalarValue={true}
        required
        {...props}
    >
        <SelectV2.FormControl>
            <SelectV2.FormLabel />
            <SelectV2.Component />
            <SelectV2.ErrorLabel />
        </SelectV2.FormControl>
    </SelectV2>

}