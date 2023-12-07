import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CheckboxV2 from '../../../../../base/atoms/v2/Form/rigo-checkbox';
import SelectV2 from '../../../../../base/atoms/v2/Form/rigo-select';
import TextAreaV2 from '../../../../../base/atoms/v2/Form/rigo-text-area';


export const AddressAndContactFieldset = (props: any) => {
    const { data, mount, reset, getValues, watch, ...propsRest } = props;

    React.useEffect(() => {
        mount({
            reset, getValues, watch
        });
    }, []);

    return <Flex direction="column" gap={4}>
        <Flex direction="column" gap={2}>
            <Text>Current Address</Text>
            <Box>
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

                    <SelectV2
                        name="LocalBody"
                        label="Local Body"
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

                    <SelectV2
                        name="WardNo"
                        label="Ward No."
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


                <TextAreaV2
                    name="Locality"
                    label="Locality"
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

                
            </Box>
        </Flex>

        <CheckboxV2.Default
            name='IsSameAddress'
            label='My corresponding and permanent address are same'
            {...propsRest} />

        <Flex direction="column" gap={2}>
            <Text>Permanent Address</Text>
            <Flex gap={4}>

                <SelectV2
                    name="Permanent Province"
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

                <SelectV2
                    name="PermanentLocalBody"
                    label="Local Body"
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

                <SelectV2
                    name="PermanentWardNo"
                    label="Ward No."
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


            <TextAreaV2
                name="PermanentLocality"
                label="Locality"
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

    </Flex>;


};
