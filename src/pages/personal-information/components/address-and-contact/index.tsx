import { EditIcon } from "@chakra-ui/icons"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { IconButton } from "../../../../base/atoms"
import { fnClose, fnMount, fnOpen, fnSubmit, selectCountries, selectDistricts, selectIsOpen, selectProvinces, useFormStore } from "../../../../stores/use-form-store"
import { fnClearStore, fnFetchPendingRequest, fnFetchPersonalInformation as fnFetchPersonalInformation, selectPersonalInformation, usePersonalInformationStore as usePersonalInformationStore } from "../../../../stores/use-personal-information-store"
import { IPersonalInformation } from "../../../../types/personal-information.types"
import { AddressAndContactForm } from "../forms/address-and-contact"

export const cardHeaderSx = {
    fontSize: "normal",
    fontWeight: "medium"
}
export const cardBodySx = {}

function getCurrentAddress(personalInformation: IPersonalInformation) {
    if (!personalInformation) {
        return
    }
    const { EmployeeAddress } = personalInformation;
    const { PSLocalBodyId, PSCountryName, PSDistrict, PSZone, PSDistrictId, PSHouseNo, PSProvince, PSState, PSStreet, PSLocalBodyName, PSLocalBodyNameNepali, PSLocality, PSVDCMuncipality, PSWardNo } = EmployeeAddress;
    return { PSLocalBodyId, PSCountryName, PSDistrict, PSZone, PSDistrictId, PSHouseNo, PSProvince, PSState, PSStreet, PSLocalBodyName, PSLocalBodyNameNepali, PSLocality, PSVDCMuncipality, PSWardNo }
}

function getPermanentAddress(personalInformation: IPersonalInformation) {
    if (!personalInformation) {
        return
    }
    const { EmployeeAddress } = personalInformation;
    const { PECountyName, PEDistrict, PEHouseNo, PELocalBodyId, PELocalBodyName, PELocalBodyNameNepali, PELocality, PEProvince, PEProvinceId, PEState, PEStreet, PEVDCMuncipality, PEWardNo, PEZone } = EmployeeAddress;
    return { PECountyName, PEDistrict, PEHouseNo, PELocalBodyId, PELocalBodyName, PELocalBodyNameNepali, PELocality, PEProvince, PEProvinceId, PEState, PEStreet, PEVDCMuncipality, PEWardNo, PEZone }
}

function getPhone(personalInformation: IPersonalInformation) {
    if (!personalInformation) {
        return
    }
    const { EmployeeContacts } = personalInformation;
    const { PersonalPhone, OfficePhone } = EmployeeContacts;
    return { PersonalPhone, OfficePhone }
}


export const AddressAndContact = () => {


    // ZUSTAND
    // SELECTORS
    const personalInformation = usePersonalInformationStore(selectPersonalInformation)
    // const pendingRequest = usePersonalInformationStore(selectPendingRequest)
    const isOpen = useFormStore(selectIsOpen)
    const countries = useFormStore(selectCountries)
    const provinces = useFormStore(selectProvinces)
    const districts = useFormStore(selectDistricts)

    // ACTIONS
    const fetchPersonalInformation = usePersonalInformationStore(fnFetchPersonalInformation)
    const fetchPendingRequest = usePersonalInformationStore(fnFetchPendingRequest)
    const clearStore = usePersonalInformationStore(fnClearStore)
    const onOpen = useFormStore(fnOpen)
    const mount = useFormStore(fnMount)
    const onClose = useFormStore(fnClose)
    const submit = useFormStore(fnSubmit)

    React.useEffect(() => {
        fetchPersonalInformation();
        fetchPendingRequest();

        return () => {
            clearStore()
        }
    }, [])

    // const fetchActor = createActor(fetchMachine)

    // fetchActor.subscribe((state) => {
    //     console.log(state.value)
    // })

    // const [state] = useActor(fetchActor)
    // const [mfState, mfSend, services] = useActor(modalFormMachine)

    const permanentAddress = getPermanentAddress(personalInformation.data as IPersonalInformation)
    const currentAddress = getCurrentAddress(personalInformation.data as IPersonalInformation)
    const phone = getPhone(personalInformation.data as IPersonalInformation)

    return <>
        <Card p={5} shadow="md">
            <CardHeader as={Flex} justifyContent="space-between">
                <Heading sx={cardHeaderSx}>Address and Contact</Heading>
                <IconButton aria-label="Edit Address and contact" icon={<EditIcon />} onClick={() => {
                    onOpen()
                    // mfSend({ type: "OPEN" })
                }} />
            </CardHeader>
            <CardBody sx={cardBodySx}>
                <Flex>
                    <Box flex={1}>
                        <Text>CurrentAddress</Text>
                    </Box>
                    <Box flex={1}>
                        {JSON.stringify(currentAddress, null, 2)}
                    </Box>
                </Flex>
                <Flex>
                    <Box flex={1}>
                        <Text>Permanent Address</Text>
                    </Box>
                    <Box flex={1}>
                        {JSON.stringify(permanentAddress, null, 2)}
                    </Box>
                </Flex>
                <Flex>
                    <Box flex={1}>
                        <Text>Phone</Text>
                    </Box>
                    <Box flex={1}>
                        {JSON.stringify(phone, null, 2)}
                    </Box>
                </Flex>
            </CardBody>
        </Card>

        <AddressAndContactForm
            isOpen={isOpen}
            mount={mount}
            close={onClose}
            submit={submit}
            data={{
                countries,
                provinces,
                districts
            }}
        />
    </>
}