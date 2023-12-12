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
import { When } from 'react-if';
import { ConnectForm } from '../../../../../base/atoms/v2/Form/connect-form';
import { FormProvider } from '../../../../../base/atoms/v2/Form/form-provider';
import { fnWatchChange, useFormStore } from '../../../../../stores/use-form-store';
import { Watcher } from './watcher';
import { HealthFieldset } from './fieldset';
import { formNameProperties } from './forn-name-properties';
import { getDefaultValues } from '../family/forn-name-properties';

interface FamilyFormFormProps {
    isOpen: any
    mount: any
    close: any
    submit: any
    data: any
}
export const HealthForm = ({ isOpen, mount, close, submit, data }: FamilyFormFormProps) => {

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
            <Modal isOpen={isOpen} onClose={handleClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Family</ModalHeader>
                    <ModalCloseButton />
                    <FormProvider
                        onSubmit={handleSubmit}
                        defaultValues={getDefaultValues(formNameProperties)}
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
                                        <HealthFieldset
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

