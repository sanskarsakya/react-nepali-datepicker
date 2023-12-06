import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from '@chakra-ui/react';
import React from 'react';
import { When } from 'react-if';
import { ConnectForm } from '../../../../../base/atoms/v2/Form/connect-form';
import { FormProvider } from '../../../../../base/atoms/v2/Form/form-provider';
import InputTextV2 from '../../../../../base/atoms/v2/Form/rigo-input-text';
import SelectV2 from '../../../../../base/atoms/v2/Form/rigo-select';
import CheckboxV2 from '../../../../../base/atoms/v2/Form/rigo-checkbox';
import { fnWatchChange, useFormStore } from '../../../../../stores/use-form-store';
import { Watcher } from './watcher';

export const AddressAndContactFormComponent = (props: any) => {
    const { data, mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        })
    }, [])

    return <Flex direction="column" gap={4}>
        <Flex direction="column" gap={2}>
            <Text>Current Address</Text>
            <Box>
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
                        options={data.countries.data}
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
                        options={data.provinces.data}
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
                        options={data.districts.data}
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
            </Box>
        </Flex>

        <CheckboxV2.Default
            name='IsSameAddress'
            label='My corresponding and permanent address are same'
            {...propsRest}
        />

        <Flex direction="column" gap={2}>
            <Text>Permanent Address</Text>
            <Box>
                <Flex gap={4}>
                    <InputTextV2
                        name="PermanentAddress"
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
                        name="PermanentCountry"
                        label="Country"
                        required
                        options={data.countries.data}
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
                        name="PermanentProvince"
                        label="Province"
                        options={data.provinces.data}
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
                        name="PermanentDistrict"
                        label="District"
                        options={data.districts.data}
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
                        name="PermanentLocality"
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
                        name="PermanentHouseNo"
                        label="House No"
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
                        name="PermanentStreet"
                        label="Street"
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
                        name="PermanentState"
                        label="State"
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
                        name="PermanentZipCode"
                        label="Zip Code"
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
                        name="PermanentZone"
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
            </Box>
        </Flex>

    </Flex>


}

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
                            IsSameAddress: false,
                            PermanentAddress: "",
                            PermanentCountry: "",
                            PermanentProvince: "",
                            PermanentDistrict: "",
                            PermanentLocality: "",
                            PermanentHouseNo: "",
                            PermanentStreet: "",
                            PermanentState: "",
                            PermanentZipCode: "",
                            PermanentZone: "",
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
                                        <AddressAndContactFormComponent
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

