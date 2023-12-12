import { EditIcon } from "@chakra-ui/icons"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { IconButton } from "../../../../base/atoms"
import { fnClearStore, fnFetchPendingRequest, fnFetchPersonalInformation, selectPersonalInformation, usePersonalInformationStore } from "../../../../stores/use-personal-information-store"
import { IPersonalInformation } from "../../../../types/personal-information.types"
import { cardBodySx, cardHeaderSx } from "../address-and-contact"
import { HealthForm } from "../forms/health"
import { fnClose, fnMount, fnOpen, fnSubmit, selectIsOpen, useHealthFormStore } from "../../../../stores/use-health-form-store"


export const Health = () => {

    const personalInformation = usePersonalInformationStore(selectPersonalInformation)
    const isOpen = useHealthFormStore(selectIsOpen)

    // ACTIONS
    const fetchPersonalInformation = usePersonalInformationStore(fnFetchPersonalInformation)
    const fetchPendingRequest = usePersonalInformationStore(fnFetchPendingRequest)
    const clearStore = usePersonalInformationStore(fnClearStore)
    const onOpen = useHealthFormStore(fnOpen)
    const mount = useHealthFormStore(fnMount)
    const onClose = useHealthFormStore(fnClose)
    const submit = useHealthFormStore(fnSubmit)


    React.useEffect(() => {
        fetchPersonalInformation();
        fetchPendingRequest();

        return () => {
            clearStore()
        }
    }, [])

    return <>
        <Card p={5} shadow="md">
            <CardHeader as={Flex} justifyContent="space-between">
                <Heading sx={cardHeaderSx}>Health</Heading>
                <IconButton
                    aria-label="Edit Address and contact"
                    icon={<EditIcon />}
                    onClick={() => {
                        onOpen({})
                    }}
                />
            </CardHeader>
            <CardBody sx={cardBodySx}>
                <Flex>
                    <Box flex={1}>
                        <Text>Health Condition</Text>
                    </Box>
                    <Box flex={1}>
                        {JSON.stringify((personalInformation?.data as IPersonalInformation)?.Health.ContitionTypeName, null, 2)}
                    </Box>
                </Flex>
                <Flex>
                    <Box flex={1}>
                        <Text>Blood Group</Text>
                    </Box>
                    <Box flex={1}>
                        {JSON.stringify((personalInformation?.data as IPersonalInformation)?.Health.BloodGroup, null, 2)}
                    </Box>
                </Flex>
                <Flex>
                    <Box flex={1}>
                        <Text>Emergency Contact</Text>
                    </Box>
                    <Box flex={1}>
                        {JSON.stringify((personalInformation?.data as IPersonalInformation)?.Health.BloodGroup, null, 2)}
                    </Box>
                </Flex>
            </CardBody>
        </Card>

        <HealthForm
            isOpen={isOpen}
            mount={mount}
            close={onClose}
            submit={submit}
            data={{
            }}
        />


    </>
}