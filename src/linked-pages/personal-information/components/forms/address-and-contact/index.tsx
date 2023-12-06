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
import SelectV2 from '../../../../../base/atoms/v2/Form/rigo-select';

export const AddressAndContactFormComponent = (props: any) => {
    const { mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        })
    }, [])

    return <Flex direction="column" gap={4}>

        <Flex gap={4}>
            <InputTextV2
                name="Address"
                label="Address"
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
                name="Country"
                label="Country"
                required
                options={[]}
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
        </Flex>

        <Flex gap={4}>

            <SelectV2
                name="Province"
                label="Province"
                options={[]}
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

            <SelectV2
                name="District"
                label="District"
                options={[]}
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
        </Flex>

        <Flex gap={4}>

            <InputTextV2
                name="Locality"
                label="Locality"
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
                label="House No"
                name="HouseNo"
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

        <Flex gap={4}>

            <InputTextV2
                label="Street"
                name="Street"
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
                label="State"
                name="State"
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

        <Flex gap={4}>

            <InputTextV2
                label="Zip Code"
                name="ZipCode"
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
                name="Zone"
                label="Zone"
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


}

interface AddressAndContactFormProps {
    isOpen: any
    mount: any
    close: any
    submit: any
}
export const AddressAndContactForm = ({ isOpen, mount, close, submit }: AddressAndContactFormProps) => {

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
                            Address: "",
                            Country: "",
                            Province: "",
                            District: "",
                            Locality: "",
                            HouseNo: "",
                            Street: "",
                            State: "",
                            ZipCode: "",
                            Zone: "",
                        }}
                        showDevTool={true}
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

                                return <>
                                    <ModalBody>
                                        <AddressAndContactFormComponent
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

