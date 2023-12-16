import { Button, Container, Flex } from "@chakra-ui/react"
import { ConnectForm } from "../../base/atoms/v2/Form/connect-form"
import { FormProvider } from "../../base/atoms/v2/Form/form-provider"
import { AddressAndContactFieldset } from "./fieldset"
import { Watcher } from "./watcher"

export const Experimental = () => {
    const handleSubmit = (data: any) => {
        if (!data) {
            return
        }
        console.log(data)
    }
    return (
        <Container>
            <FormProvider
                onSubmit={handleSubmit}
                defaultValues={{
                    country: null,
                    province: null,
                    district: null
                }}
                showDevTool={true}
            >
                <ConnectForm>
                    {(formProps: any) => {
                        return (
                            <Watcher
                                {...formProps}
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
                            setValue,
                            watch,
                            formState: { errors },
                        } = formProps;

                        const inputProps = {
                            control,
                            errors,
                            reset,
                            getValues,
                            watch,
                            setValue,
                        };

                        return <Flex gap={2} direction="column">
                            <AddressAndContactFieldset {...inputProps} />

                            <Button rounded="none" size="sm" colorScheme='blue' type='submit' isLoading={false}>Submit</Button>
                        </Flex>
                    }}
                </ConnectForm>
            </FormProvider>
        </Container>
    )
}

