import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import { ConnectForm } from '../../../../../base/atoms/v2/Form/connect-form';
import { FormProvider } from '../../../../../base/atoms/v2/Form/form-provider';
import InputTextV2 from '../../../../../base/atoms/v2/Form/rigo-input-text';
import { fnWatchChange, useFormStore } from '../../../../../stores/use-form-store';
import { Watcher } from './watcher';

export const BirthAndMarriageFormComponent = (props: any) => {
    const {  mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        })
    }, [])

    return <Flex direction="column" gap={4}>
        <Flex direction="column" gap={2}>
            <Flex gap={4}>
                <InputTextV2
                    name="MaritalStatus"
                    label="Marital Status"
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


}

interface AddressAndContactFormProps {
    isOpen: any
    mount: any
    close: any
    submit: any
}
export const BirthAndMarriageForm = ({ isOpen, mount, close, submit,  }: AddressAndContactFormProps) => {

    const watchChange = useFormStore(fnWatchChange)

    // FUNCTIONS
    const handleSubmit = (data: any) => {
        if (!data) {
            return
        }
        return submit()
    }

    const handleClose = () => {
        close()
    }

    return (
        <When condition={isOpen}>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Birth And Marriage</ModalHeader>
                    <ModalCloseButton />
                    <FormProvider
                        onSubmit={handleSubmit}
                        defaultValues={{
                            MaritalStatus:""
                        }}
                        showDevTool={true}
                    >
                        <ConnectForm>
                            {(formProps: any) => {
                                return (
                                    <Watcher
                                        {...formProps}
                                        watchChange={watchChange}
                                    />
                                );
                            }}
                        </ConnectForm>
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

                                return <>
                                    <ModalBody>
                                        <BirthAndMarriageFormComponent
                                            mount={mount}
                                            {...inputProps}
                                        />
                                    </ModalBody>

                                    <ModalFooter as={Flex} gap={2}>
                                        <Button rounded="none" size="sm" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button rounded="none" size="sm" colorScheme='blue' type='submit' isLoading={false}>Submit</Button>
                                    </ModalFooter>
                                </>
                            }}
                        </ConnectForm>
                    </FormProvider>
                </ModalContent>
            </Modal>
        </When>
    );
}

