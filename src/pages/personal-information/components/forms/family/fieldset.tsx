import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex, ScaleFade, Text } from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import InputTextV2 from '../../../../../base/atoms/v2/Form/rigo-input-text';
import RadioGroupV2 from '../../../../../base/atoms/v2/Form/rigo-radio-group';
import SelectV2 from '../../../../../base/atoms/v2/Form/rigo-select';
import { formNameProperties } from './forn-name-properties';
import dayjs from 'dayjs';

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
const RELATION_OPTIONS = [
    {
        label: "Father",
        value: "Father",
    },
    {
        label: "Mother",
        value: "Mother",
    },
    {
        label: "Grandfather",
        value: "Grandfather",
    },
    {
        label: "Spouse",
        value: "Spouse",
    },
    {
        label: "Son",
        value: "Son",
    },
    {
        label: "Daughter",
        value: "Daughter",
    },
    {
        label: "Daughter",
        value: "Daughter",
    },
    {
        label: "Sibling",
        value: "Sibling",
    },
];
export const FamilyFieldset = (props: any) => {
    const { data, mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        });
    }, []);

    return <Flex direction="column" gap={2}>
        <RadioGroupV2.Default
            label={formNameProperties.Salutation.label}
            name={formNameProperties.Salutation.name}
            {...propsRest}
            required
            components={{
                item: Item,
                wrapper: Wrapper,
            }}
            options={[
                {
                    label: "Miss",
                    value: "Miss",
                },
                {
                    label: "Mr.",
                    value: "Mr",
                },
                {
                    label: "Mrs.",
                    value: "Mrs",
                },
            ]}
        />

        <InputTextV2
            label={formNameProperties.FullName.label}
            name={formNameProperties.FullName.name}
            required
            {...propsRest}
        >
            <InputTextV2.FormControl>
                <Flex gap={2}>
                    <InputTextV2.FormLabel />
                </Flex>
                <InputTextV2.Component />
                <InputTextV2.HelperText />
                <InputTextV2.ErrorLabel />
            </InputTextV2.FormControl>
        </InputTextV2>

        <SelectV2
            label={formNameProperties.Relation.label}
            name={formNameProperties.Relation.name}
            isReturnScalarValue={true}
            options={RELATION_OPTIONS}
            getOptionValue={(option: any) => option.value}
            required
            {...propsRest}
        >
            <SelectV2.FormControl>
                <Flex gap={2}>
                    <SelectV2.FormLabel />
                </Flex>
                <SelectV2.Component />
                <SelectV2.HelperText />
                <SelectV2.ErrorLabel />
            </SelectV2.FormControl>
        </SelectV2>

        <When condition={watch?.(formNameProperties.Relation.label) === "Son" ||
            watch?.(formNameProperties.Relation.label) === "Daughter"}>
            <InputTextV2
                label={formNameProperties.Dob.label}
                name={formNameProperties.Dob.name}
                required
                {...propsRest}
            >
                <InputTextV2.FormControl>
                    <Flex gap={2}>
                        <InputTextV2.FormLabel />
                    </Flex>
                    <InputTextV2.Component />
                    <InputTextV2.HelperText />
                    <InputTextV2.ErrorLabel />
                </InputTextV2.FormControl>
            </InputTextV2>
        </When>

        <SelectV2
            label={formNameProperties.Nationality.label}
            name={formNameProperties.Nationality.name}
            options={data.nationalities.data}
            isReturnScalarValue={true}
            required
            {...propsRest}
        >
            <SelectV2.FormControl>
                <Flex gap={2}>
                    <SelectV2.FormLabel />
                </Flex>
                <SelectV2.Component />
                <SelectV2.HelperText />
                <SelectV2.ErrorLabel />
            </SelectV2.FormControl>
        </SelectV2>

        <Flex gap={2}>

            <InputTextV2
                label={formNameProperties.CitizenshipNo.label}
                name={formNameProperties.CitizenshipNo.name}
                required
                {...propsRest}
            >
                <InputTextV2.FormControl>
                    <Flex gap={2}>
                        <InputTextV2.FormLabel />
                    </Flex>
                    <InputTextV2.Component />
                    <InputTextV2.HelperText />
                    <InputTextV2.ErrorLabel />
                </InputTextV2.FormControl>
            </InputTextV2>

            <InputTextV2
                label={formNameProperties.NationalIdNo.label}
                name={formNameProperties.NationalIdNo.name}
                required
                {...propsRest}
            >
                <InputTextV2.FormControl>
                    <Flex gap={2}>
                        <InputTextV2.FormLabel />
                    </Flex>
                    <InputTextV2.Component />
                    <InputTextV2.HelperText />
                    <InputTextV2.ErrorLabel />
                </InputTextV2.FormControl>
            </InputTextV2>

        </Flex>

        <When condition={watch?.(formNameProperties.Dob.name) && (dayjs().diff(dayjs(watch?.(formNameProperties.Dob.name)), 'year') > 16)}>
            <InputTextV2
                label={formNameProperties.Occupation.label}
                name={formNameProperties.Occupation.name}
                required
                {...propsRest}
            >
                <InputTextV2.FormControl>
                    <Flex gap={2}>
                        <InputTextV2.FormLabel />
                    </Flex>
                    <InputTextV2.Component />
                    <InputTextV2.HelperText />
                    <InputTextV2.ErrorLabel />
                </InputTextV2.FormControl>
            </InputTextV2>

            <InputTextV2
                label={formNameProperties.Organization.label}
                name={formNameProperties.Organization.name}
                required
                {...propsRest}
            >
                <InputTextV2.FormControl>
                    <Flex gap={2}>
                        <InputTextV2.FormLabel />
                    </Flex>
                    <InputTextV2.Component />
                    <InputTextV2.HelperText />
                    <InputTextV2.ErrorLabel />
                </InputTextV2.FormControl>
            </InputTextV2>
        </When>

        <InputTextV2
            label={formNameProperties.Note.label}
            name={formNameProperties.Note.name}
            required
            {...propsRest}
        >
            <InputTextV2.FormControl>
                <Flex gap={2}>
                    <InputTextV2.FormLabel />
                </Flex>
                <InputTextV2.Component />
                <InputTextV2.HelperText />
                <InputTextV2.ErrorLabel />
            </InputTextV2.FormControl>
        </InputTextV2>

    </Flex>
};
