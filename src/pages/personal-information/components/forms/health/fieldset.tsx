import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex, ScaleFade, Text } from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import InputTextV2 from '../../../../../base/atoms/v2/Form/rigo-input-text';
import RadioGroupV2 from '../../../../../base/atoms/v2/Form/rigo-radio-group';
import SelectV2 from '../../../../../base/atoms/v2/Form/rigo-select';
import TextAreaV2 from '../../../../../base/atoms/v2/Form/rigo-text-area';
import { formNameProperties } from './forn-name-properties';

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
            _focus={{
                boxShadow: "outlinnone",
            }}
            px={4}
            py={1}
            {...rest}
            transition='all .2s ease-in-out '
            _hover={{
                bg: "#2680EB",
                color: "white",
                borderColor: "blue.800",
            }}
            _checked={{
                bg: "#2680EB",
                color: "white",
                borderColor: "#2680EB",
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

const DIAGNOSE_OPTIONS = [
    {
        label: "After Joining",
        value: "1",
    },
    {
        label: "Before Joining",
        value: "2",
    },
];

const ONGOING_TREATMENT_OPTIONS = [
    {
        label: "Yes",
        value: "Yes",
    },
    {
        label: "No",
        value: "No",
    }
]
const DISABILITY_OPTIONS = [
    {
        label: "No",
        value: "No",
    },
    {
        label: "Yes",
        value: "Yes",
    },
]
const BLOOD_GROUP_OPTIONS = [
    {
        label: "A+",
        value: "A+",
    },
    {
        label: "A-",
        value: "A-",
    },
    {
        label: "B+",
        value: "B+",
    },
    {
        label: "B-",
        value: "B-",
    },
    {
        label: "O+",
        value: "O+",
    },
    {
        label: "O-",
        value: "O-",
    },
    {
        label: "AB+",
        value: "AB+",
    },
    {
        label: "AB-",
        value: "AB-",
    },
];

const HEALTH_STATUS_OPTIONS = [
    {
        label: "Normal",
        value: "Normal",
    },
    {
        label: "Health Issue",
        value: "Health Issue",
    },
    {
        label: "Critical",
        value: "Critical",
    },
];

export const SectionLabel = ({ label }: { label: string }) => {
    return <Text fontWeight="medium" color="#1F262E">{label}</Text>
}

export const HealthFieldset = (props: any) => {
    const { data, mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        });
    }, []);

    const dgap = 5

    return <Flex direction="column" gap={5}>
        <Flex direction="column" gap={2}>

            <SectionLabel label="Health Information" />

            <Flex direction="column" gap={dgap}>

                <RadioGroupV2.Default
                    label={formNameProperties.BloodGroup.label}
                    name={formNameProperties.BloodGroup.name}
                    {...propsRest}
                    required
                    components={{
                        item: Item,
                        wrapper: Wrapper,
                    }}
                    options={BLOOD_GROUP_OPTIONS}
                />

                <Flex gap={2}>
                    <InputTextV2
                        label={formNameProperties.Height.label}
                        name={formNameProperties.Height.name}
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
                        label={formNameProperties.Weight.label}
                        name={formNameProperties.Weight.name}
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

                <InputTextV2
                    label={formNameProperties.Birthmark.label}
                    name={formNameProperties.Birthmark.name}
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

                <RadioGroupV2.Default
                    label={formNameProperties.HealthStatus.label}
                    name={formNameProperties.HealthStatus.name}
                    {...propsRest}
                    required
                    components={{
                        item: Item,
                        wrapper: Wrapper,
                    }}
                    options={HEALTH_STATUS_OPTIONS}
                />

                <Flex gap={2}>
                    <SelectV2
                        label={formNameProperties.Diagnosed.label}
                        name={formNameProperties.Diagnosed.name}
                        isReturnScalarValue={true}
                        options={DIAGNOSE_OPTIONS}
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

                    <InputTextV2
                        label={formNameProperties.DiagnosedDate.label}
                        name={formNameProperties.DiagnosedDate.name}
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

                <RadioGroupV2.Default
                    label={formNameProperties.OngoingTreatment.label}
                    name={formNameProperties.OngoingTreatment.name}
                    {...propsRest}
                    required
                    components={{
                        item: Item,
                        wrapper: Wrapper,
                    }}
                    options={ONGOING_TREATMENT_OPTIONS}
                />

                <Flex gap={2}>
                    <InputTextV2
                        label={formNameProperties.DoctorName.label}
                        name={formNameProperties.DoctorName.name}
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
                        label={formNameProperties.DoctorContact.label}
                        name={formNameProperties.DoctorContact.name}
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

                <Flex gap={2}>
                    <InputTextV2
                        label={formNameProperties.HospitalName.label}
                        name={formNameProperties.HospitalName.name}
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
                        label={formNameProperties.HospitalContact.label}
                        name={formNameProperties.HospitalContact.name}
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

                <TextAreaV2
                    label={formNameProperties.HospitalDiagnosisSummary.label}
                    name={formNameProperties.HospitalDiagnosisSummary.name}
                    required
                    {...propsRest}
                >
                    <TextAreaV2.FormControl>
                        <Flex gap={2}>
                            <TextAreaV2.FormLabel />
                        </Flex>
                        <TextAreaV2.Component />
                        <TextAreaV2.HelperText />
                        <TextAreaV2.ErrorLabel />
                    </TextAreaV2.FormControl>
                </TextAreaV2>
            </Flex>
        </Flex>


        <Flex direction="column" gap={2}>

            <SectionLabel label="Emergency Contact" />
            <Flex direction="column" gap={dgap}>

                <Flex gap={2}>

                    <InputTextV2
                        label={formNameProperties.EmergencyContactPerson.label}
                        name={formNameProperties.EmergencyContactPerson.name}
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
                        label={formNameProperties.Relation.label}
                        name={formNameProperties.Relation.name}
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

                <InputTextV2
                    label={formNameProperties.EmergencyContactPhone.label}
                    name={formNameProperties.EmergencyContactPhone.name}
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
        </Flex>

        <Flex direction="column" gap={2}>

            <SectionLabel label="Disability" />

            <Flex direction="column" gap={dgap}>

                <RadioGroupV2.Default
                    label={formNameProperties.Handicapped.label}
                    name={formNameProperties.Handicapped.name}
                    {...propsRest}
                    required
                    components={{
                        item: Item,
                        wrapper: Wrapper,
                    }}
                    options={DISABILITY_OPTIONS}
                />

                <InputTextV2
                    label={formNameProperties.DisabilityDescription.label}
                    name={formNameProperties.DisabilityDescription.name}
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
        </Flex>
    </Flex>
};
