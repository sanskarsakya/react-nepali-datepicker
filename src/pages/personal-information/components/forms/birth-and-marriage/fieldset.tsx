import { Flex, ScaleFade, Text } from '@chakra-ui/react';
import React from 'react';
import RadioGroupV2 from '../../../../../base/atoms/v2/Form/rigo-radio-group';
import { When } from 'react-if';
import { CheckCircleIcon } from '@chakra-ui/icons';


export const Wrapper = ({ children }: any) => {
    return (
        <Flex gap={3} >
            {children}
        </Flex>
    );
};

export const Item = ({ option, isDisabled, isInvalid, ...rest }: any) => {
    return (
        <Flex
            alignItems="center"
            gap={2}
            fontSize="sm"
            cursor='pointer'
            borderWidth='1px'
            rounded='full'
            boxShadow='md'
            _focus={{
                boxShadow: "outlinnone",
            }}
            px={3}
            py={1}
            {...rest}
            transition='all .2s ease-in-out '
            _hover={{
                bg: "blue.600",
                color: "white",
                borderColor: "blue.800",
            }}
            _checked={{
                bg: "blue.600",
                color: "white",
                borderColor: "blue.600",
            }}
        >
            <When condition={rest.state.isChecked}>
                <ScaleFade initialScale={0.1} in={rest.state.isChecked}>
                    <CheckCircleIcon mb={0.5} color="blue.100" />
                </ScaleFade>
            </When>

            <Text>{option.label}</Text>
        </Flex>
    );
};
export const BirthAndMarriageFieldset = (props: any) => {
    const { mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        });
    }, []);

    return <Flex direction="column" gap={4}>
        <Flex direction="column" gap={2}>
            <Flex gap={4}>
                <RadioGroupV2.Default
                    name="MaritalStatus"
                    label="Marital Status"
                    {...propsRest}
                    required
                    components={{
                        item: Item,
                        wrapper: Wrapper,
                    }}
                    options={[
                        {
                            label: "Married",
                            value: "Married",
                        },
                        {
                            label: "Single",
                            value: "Single",
                        },
                    ]} />
            </Flex>
        </Flex>

    </Flex>;


};
