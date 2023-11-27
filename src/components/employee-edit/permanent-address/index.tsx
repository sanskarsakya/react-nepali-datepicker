import {
    Button,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { useMachine } from '@xstate/react';
import React from 'react';
import { When } from 'react-if';
import { ConnectForm } from '../../../base/atoms/v2/Form/connect-form';
import { FormProvider } from '../../../base/atoms/v2/Form/form-provider';
import InputTextV2 from '../../../base/atoms/v2/Form/rigo-input-text';
import SelectV2 from '../../../base/atoms/v2/Form/rigo-select';
import { formMachine } from '../../../machines/fomr-machie';

export const EmployeeEditForm = (props: any) => {
    const { state, send, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        console.log("MOUNT_FORM")
        send("MOUNT_FORM", { reset, getValues, watch })
    }, [])

    return <Flex direction="column" gap={4}>

        {/* <pre>{JSON.stringify(state.value, null, 2)}</pre> */}
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
                options={state.context.countries}
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
                options={state.context.provinces}
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
                options={state.context.districts}
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

export const EmployeePermanentAddressEdit = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [state, send] = useMachine(formMachine)

    const handleSubmit = (data: any) => {
        console.log(JSON.stringify(data, null, 2));
        if (!data) {
            return
        }
        send("SUBMIT_FORM", {
            data
        })
        onClose()
    }

    const handleClose = () => {
        onClose()
        send("CLOSE")
    }
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

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
                                            <Heading fontWeight="medium" fontSize="lg" >Permanent Address </Heading>
                                            <EmployeeEditForm
                                                state={state}
                                                send={send}
                                                {...inputProps}
                                            />
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button type='submit'>Submit</Button>
                                        </ModalFooter>
                                    </>

                                }}
                            </ConnectForm>
                        </FormProvider>
                    </ModalContent>
                </Modal>
            </When>
        </>
    );
}

