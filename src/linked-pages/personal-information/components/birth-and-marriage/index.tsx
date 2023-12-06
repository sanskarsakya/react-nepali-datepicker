import { EditIcon } from "@chakra-ui/icons"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import { useActor } from "@xstate/react"
import { IconButton } from "../../../../base/atoms"
import { fetchMachine } from "../../machines/fetch-machine"
import { cardBodySx, cardHeaderSx } from "../address-and-contact"
import { IPersonalInformation } from "../../machines/types/personal-information.types"


export const BirthAndMarriage = () => {

    const [state,] = useActor(fetchMachine)

    const personalInformation: IPersonalInformation = state.context.personalInformation

    return <Card p={5} shadow="md">
        <CardHeader as={Flex} justifyContent="space-between">
            <Heading sx={cardHeaderSx}>Birth And Marriage</Heading>
            <IconButton aria-label="Edit Birth And Marriage" icon={<EditIcon />} />
        </CardHeader>
        <CardBody sx={cardBodySx}>
            <Flex>
                <Box flex={1}>
                    <Text>Health Condition</Text>
                </Box>
                <Box flex={1}>
                    {personalInformation?.PersonalDetail?.DateOfBirth}
                </Box>
            </Flex>
            <Flex>
                <Box flex={1}>
                    <Text>Age</Text>
                </Box>
                <Box flex={1}>
                    {personalInformation?.PersonalDetail?.DateOfBirth}
                </Box>
            </Flex>
            <Flex>
                <Box flex={1}>
                    <Text>Marital Status</Text>
                </Box>
                <Box flex={1}>
                    {personalInformation?.PersonalDetail?.MaritalStatus}
                </Box>
            </Flex>

        </CardBody>
    </Card>
}