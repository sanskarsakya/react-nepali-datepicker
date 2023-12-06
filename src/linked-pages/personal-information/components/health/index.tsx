import { EditIcon } from "@chakra-ui/icons"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import { useActor } from "@xstate/react"
import { IconButton } from "../../../../base/atoms"
import { fetchMachine } from "../../machines/fetch-machine"
import { cardBodySx, cardHeaderSx } from "../address-and-contact"
import { IPersonalInformation } from "../../machines/types/personal-information.types"


export const Health = () => {

    const [state,] = useActor(fetchMachine)

    const personalInformation: IPersonalInformation = state.context.personalInformation

    return <Card p={5} shadow="md">
        <CardHeader as={Flex} justifyContent="space-between">
            <Heading sx={cardHeaderSx}>Health</Heading>
            <IconButton aria-label="Edit Address and contact" icon={<EditIcon />} />
        </CardHeader>
        <CardBody sx={cardBodySx}>
            <Flex>
                <Box flex={1}>
                    <Text>Health Condition</Text>
                </Box>
                <Box flex={1}>
                    {JSON.stringify(personalInformation?.Health.ContitionTypeName, null, 2)}
                </Box>
            </Flex>
            <Flex>
                <Box flex={1}>
                    <Text>Blood Group</Text>
                </Box>
                <Box flex={1}>
                    {JSON.stringify(personalInformation?.Health.BloodGroup, null, 2)}
                </Box>
            </Flex>
            <Flex>
                <Box flex={1}>
                    <Text>Emergency Contact</Text>
                </Box>
                <Box flex={1}>
                    {JSON.stringify(personalInformation?.Health.BloodGroup, null, 2)}
                </Box>
            </Flex>

        </CardBody>
    </Card>
}