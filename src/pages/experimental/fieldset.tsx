import { Flex } from '@chakra-ui/react';
import React from 'react';
import { CountriesDropdown, DistrictDropdown, ProvinceDropdown } from './entities';
import * as fromCountryStore from './entities/model/country/use-country-store';

export const AddressAndContactFieldset = (props: any) => {
    const identifier = "default"
    const identifier2 = "permanent"
    const fetchCountry = fromCountryStore.useCountryStore(fromCountryStore.fetch)

    React.useEffect(() => {
        fetchCountry(identifier)
        fetchCountry(identifier2)
    }, [fetchCountry])

    return <Flex direction="column" gap={4}>
        <Flex gap={4}>
            <CountriesDropdown name="CurrentCountry" identifier={identifier} {...props} />
            <ProvinceDropdown
                countryName="CurrentCountry"
                name="CurrentProvince"
                identifier={identifier}
                {...props} />

            <DistrictDropdown
                name="district"
                resetList={['CurrentCountry', "CurrentProvince"]}
                provinceName="CurrentProvince"  {...props} />
        </Flex>
        <Flex>
            <CountriesDropdown name="PermanentCountry" identifier={identifier2} {...props} />
            <ProvinceDropdown
                countryName="PermanentCountry"
                name="PermanentProvince"
                identifier={identifier2}
                {...props} />
        </Flex>
    </Flex>;

};
