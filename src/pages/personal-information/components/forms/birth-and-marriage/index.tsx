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
import { When } from 'react-if';
import { ConnectForm } from '../../../../../base/atoms/v2/Form/connect-form';
import { FormProvider } from '../../../../../base/atoms/v2/Form/form-provider';
import { fnWatchChange, useFormStore } from '../../../../../stores/use-form-store';
import { BirthAndMarriageFieldset } from './fieldset';
import { Watcher } from './watcher';


interface AddressAndContactFormProps {
    isOpen: any
    mount: any
    close: any
    submit: any
}
export const BirthAndMarriageForm = ({ isOpen, mount, close, submit, }: AddressAndContactFormProps) => {

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
                            MaritalStatus: "2"
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
                                        <BirthAndMarriageFieldset
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

