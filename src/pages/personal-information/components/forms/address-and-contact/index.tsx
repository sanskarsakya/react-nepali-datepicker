import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay} from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import { ConnectForm } from '../../../../../base/atoms/v2/Form/connect-form';
import { FormProvider } from '../../../../../base/atoms/v2/Form/form-provider';
import { fnWatchChange, useFormStore } from '../../../../../stores/use-form-store';
import { Watcher } from './watcher';
import { AddressAndContactFieldset } from './fieldset';

interface AddressAndContactFormProps {
    isOpen: any
    mount: any
    close: any
    submit: any
    data: any
}
export const AddressAndContactForm = ({ isOpen, mount, close, submit, data }: AddressAndContactFormProps) => {

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
                    <ModalHeader>Your Address</ModalHeader>
                    <ModalCloseButton />
                    <FormProvider
                        onSubmit={handleSubmit}
                        defaultValues={{
                            // Address: "",
                            // Country: "",
                            Province: "",
                            District: "",
                            LocalBody: "",
                            WardNo: "",
                            Locality: "",
                            // HouseNo: "",
                            // Street: "",
                            // State: "",
                            // ZipCode: "",
                            // Zone: "",
                            IsSameAddress: false,
                            // PermanentAddress: "",
                            // PermanentCountry: "",
                            PermanentProvince: "",
                            PermanentDistrict: "",
                            PermanentLocalBody: "",
                            PermanentWardNo: "",
                            PermanentLocality: "",
                            // PermanentHouseNo: "",
                            // PermanentStreet: "",
                            // PermanentState: "",
                            // PermanentZipCode: "",
                            // PermanentZone: "",
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
                                        <AddressAndContactFieldset
                                            data={data}
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

