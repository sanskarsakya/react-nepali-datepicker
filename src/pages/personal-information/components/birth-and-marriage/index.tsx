import { EditIcon } from "@chakra-ui/icons"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import { IconButton } from "../../../../base/atoms"
import { fnClose, fnMount, fnOpen, fnSubmit, selectIsOpen, useBirthAndMarriageFormStore } from "../../../../stores/use-birth-and-marriage-form-store"
import { fnClearStore, fnFetchPendingRequest, fnFetchPersonalInformation, selectPersonalInformation, usePersonalInformationStore } from "../../../../stores/use-personal-information-store"
import { IPersonalInformation } from "../../../../types/personal-information.types"
import { cardBodySx, cardHeaderSx } from "../address-and-contact"
import React from "react"
import { BirthAndMarriageForm } from "../forms/birth-and-marriage"


export const BirthAndMarriage = () => {

    const personalInformation = usePersonalInformationStore(selectPersonalInformation)
    const isOpen = useBirthAndMarriageFormStore(selectIsOpen)

    // ACTIONS
    const fetchPersonalInformation = usePersonalInformationStore(fnFetchPersonalInformation)
    const fetchPendingRequest = usePersonalInformationStore(fnFetchPendingRequest)
    const clearStore = usePersonalInformationStore(fnClearStore)
    const onOpen = useBirthAndMarriageFormStore(fnOpen)
    const mount = useBirthAndMarriageFormStore(fnMount)
    const onClose = useBirthAndMarriageFormStore(fnClose)
    const submit = useBirthAndMarriageFormStore(fnSubmit)


    React.useEffect(() => {
        fetchPersonalInformation();
        fetchPendingRequest();

        return () => {
            clearStore()
        }
    }, [])

    const personalDetail = (personalInformation?.data as IPersonalInformation)?.PersonalDetail

    return <>
        <Card p={5} shadow="md">
            <CardHeader as={Flex} justifyContent="space-between">
                <Heading sx={cardHeaderSx}>Birth And Marriage</Heading>
                <IconButton aria-label="Edit Birth And Marriage" icon={<EditIcon />}  onClick={onOpen}/>
            </CardHeader>
            <CardBody sx={cardBodySx}>
                <Flex>
                    <Box flex={1}>
                        <Text>Health Condition</Text>
                    </Box>
                    <Box flex={1}>
                        {personalDetail?.DateOfBirth}
                    </Box>
                </Flex>
                <Flex>
                    <Box flex={1}>
                        <Text>Age</Text>
                    </Box>
                    <Box flex={1}>
                        {personalDetail?.DateOfBirth}
                    </Box>
                </Flex>
                <Flex>
                    <Box flex={1}>
                        <Text>Marital Status</Text>
                    </Box>
                    <Box flex={1}>
                        {personalDetail?.MaritalStatus}
                    </Box>
                </Flex>

            </CardBody>
        </Card>
        <BirthAndMarriageForm
            isOpen={isOpen}
            mount={mount}
            close={onClose}
            submit={submit}
        />
    </>
}