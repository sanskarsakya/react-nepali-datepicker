import * as fromProvinceStore from "../../model/province/use-province-store"
import SelectV2 from "../../../../../base/atoms/v2/Form/rigo-select"
import React from "react";
export const ProvinceDropdown = (props: any) => {
    const { watch, reset } = props

    const options = fromProvinceStore.useProvinceStore(state => state.item[props.identifier])
    const fetchProvince = fromProvinceStore.useProvinceStore(fromProvinceStore.fetch)

    React.useEffect(() => {
        const subscription =
            watch &&
            watch((value: any, { name }: any) => {
                if (name === props.countryName) {
                    fetchProvince(value[name].value, props.identifier)
                    reset({
                        ...value,
                        [props.name]: null
                    })
                }
            });

        return () => subscription.unsubscribe();
    }, [watch, reset, fetchProvince]);


    return <SelectV2
        name={props.name}
        label="Provinces"
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