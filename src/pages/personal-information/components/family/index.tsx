import { EditIcon } from "@chakra-ui/icons"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import * as _ from "lodash"
import { IconButton } from "../../../../base/atoms"
import { cardBodySx, cardHeaderSx } from "../address-and-contact"

function groupAndCountFamilyMembers(familyArray: any[]) {
    return _.chain(familyArray)
        .groupBy('Relation')
        .mapValues('length')
        .value();

}

export const FamilyDataCard = ({ label, data }: any) => {
    return <Flex>
        <Box flex={1}>
            <Text>{label}</Text>
        </Box>
        <Box flex={1}>
            {data ?? "-"}
        </Box>
    </Flex>
}

export const Family = () => {

    // const [state,] = useActor(fetchMachine)

    // const personalInformation: IPersonalInformation = state.context.personalInformation

    // let father = null;
    // let mother = null;
    // let spouse = null;
    // let child: any = null;

    // personalInformation?.Family.forEach(fam => {
    //     if (fam.Relation === "Father") {
    //         father = fam.Name
    //     } else if (fam.Relation === "Mother") {
    //         mother = fam.Name
    //     } else if (fam.Relation === "Spouse") {
    //         spouse = fam.Name
    //     } else if (fam.Relation === "Children") {
    //         child = child === null ? `${fam.Name} (${fam.DateOfBirth})` : `, ${fam.Name} (${fam.DateOfBirth})`
    //     }
    // })

    // const groped = groupAndCountFamilyMembers(personalInformation?.Family)

    return <Card p={5} shadow="md">
        <CardHeader as={Flex} justifyContent="space-between">
            <Heading sx={cardHeaderSx}>Family</Heading>
            <IconButton aria-label="Edit Family" icon={<EditIcon />} />
        </CardHeader>
        <CardBody sx={cardBodySx}>
            <Flex gap={2}>{
                // Object.keys(groped).map(key => {
                //     return <Box bg="green.600" rounded="none" color="gray.100" px={2} py={1} fontSize="sm" >{groped[key]} {key} </Box>
                // })
            }</Flex>
            <Box>
                {/* <FamilyDataCard label="Father" data={father} />
                <FamilyDataCard label="Mother" data={mother} />
                <FamilyDataCard label="Spouse" data={spouse} />
                <FamilyDataCard label="Children" data={child} /> */}
            </Box>

            <Box>
                {/* {JSON.stringify(personalInformation?.Family, null, 2)} */}
            </Box>
        </CardBody>
    </Card>
}