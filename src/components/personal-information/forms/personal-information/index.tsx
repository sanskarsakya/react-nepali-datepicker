import { Flex } from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import { ConnectForm } from '../../../../base/atoms/v2/Form/connect-form';
import InputTextV2 from '../../../../base/atoms/v2/Form/rigo-input-text';
import SelectV2 from '../../../../base/atoms/v2/Form/rigo-select';
import { ModalForm } from '../../../../base/molecules/modal-form';
import { FORM_TYPE_PERSONAL_INFORMATION } from '../../constant';
import { formNameProperties } from './form-name-properties';
import { INITIAL_FORM_VALUE } from './default-values';

const MARTIAL_STATUS_OPTIONS = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
    { label: "Divorced", value: "Divorced" },
    { label: "Widowed", value: "Widowed" },
    { label: "Separated", value: "Separated" },
    { label: "Other", value: "Other" },
]

const GENDER_OPTIONS = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
    { label: "Prefer not to say", value: "PreferNotToSay" },
]

const PersonalInformationFormComponent = (props: any) => {
    const { send, reset, getValues, watch, control, errors } = props;
    const inputProps = {control, errors}


    React.useEffect(() => {
        send("ON_FORM_MOUNT", { reset, getValues, watch, formType: "personalInformation" })
    }, [])

    return <Flex direction="column" gap={4}>

        <Flex gap={4}>
            <SelectV2
                name={formNameProperties.MaritalStatus.name}
                label={formNameProperties.MaritalStatus.label}
                required={true}
                options={MARTIAL_STATUS_OPTIONS}
                {...inputProps}
            >
                <SelectV2.FormControl>
                    <Flex gap={2}>
                        <SelectV2.FormLabel />
                        <SelectV2.HelperText />
                    </Flex>
                    <SelectV2.Component />
                    <SelectV2.ErrorLabel />
                </SelectV2.FormControl>
            </SelectV2>
        </Flex>

        <Flex gap={4}>
            <SelectV2
                name={formNameProperties.Gender.name}
                label={formNameProperties.Gender.label}
                options={GENDER_OPTIONS}
                required={true}
                {...inputProps}
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
        </Flex>

        <Flex gap={4}>

            <InputTextV2
                name={formNameProperties.DOB.name}
                label={formNameProperties.DOB.label}
                required={true}
                {...inputProps}
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


}

interface PersonalInformationFormProps {
    isOpen: boolean;
    onClose: () => void;
    state: any;
    send: any;
}

export const PersonalInformationForm = ({
    isOpen,
    onClose,
    state,
    send,
}: PersonalInformationFormProps) => {

    // FUNCTIONS
    const handleSubmit = (data: any) => {
        console.log(JSON.stringify(data, null, 2));
        if (!data) {
            return
        }
        send("ON_FORM_SUBMIT", {
            data,
            formType: FORM_TYPE_PERSONAL_INFORMATION,
        })
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <>
            <When condition={isOpen}>
                <ModalForm
                    defaultValues={INITIAL_FORM_VALUE}
                    isOpen={isOpen}
                    onClose={handleClose}
                    onSubmit={handleSubmit}
                    title='Personal Information'
                    showDevTool
                >
                    <ConnectForm>
                        {(formProps: any) => {
                            const {
                                control,
                                reset,
                                getValues,
                                watch,
                                formState: { errors },
                            } = formProps;

                            const inputProps = {
                                control,
                                errors,
                                reset,
                                getValues,
                                watch,
                            };

                            return <PersonalInformationFormComponent
                                state={state}
                                send={send}
                                {...inputProps}
                            />
                        }}
                    </ConnectForm>
                </ModalForm>
            </When>
        </>
    );
}

