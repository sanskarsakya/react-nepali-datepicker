import * as fromCountryStore from "../.."
import SelectV2 from "../../../../../base/atoms/v2/Form/rigo-select"

export const CountriesDropdown = (props: any) => {

    const options: any = fromCountryStore.useCountryStore(state => state.item[props.identifier])

    return <>
        <SelectV2
            name={props.name}
            label="Countries"
            options={options}
            // isReturnScalarValue={true}
            required
            {...props}
        >
            <SelectV2.FormControl>
                <SelectV2.FormLabel />
                <SelectV2.Component />
                <SelectV2.ErrorLabel />
            </SelectV2.FormControl>
        </SelectV2>
    </>
}