import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import React from "react";
import { personalInformationMachine } from "../../machines/personal-information";
import { FORM_TYPE_CURRENT_ADDRESS, FORM_TYPE_FAMILY, FORM_TYPE_HEALTH, FORM_TYPE_PERMANENT_ADDRESS } from "./constant";
import { PersonalInformationForm } from "./forms/personal-information";

const CurrentAddressForm = ({ send, formType }: any) => {
    React.useEffect(() => {
        send("ON_FORM_MOUNT", { formType })
    }, [])

    return <Box>
        <Text>{formType}</Text>
        <Flex gap={2}>
            <Button
                rounded="none"
                colorScheme="teal"
                onClick={() => {
                    send("ON_FORM_SUBMIT", {
                        formType
                    });
                }}
                size="xs"
                >
                Submit
            </Button>
            <Button
                rounded="none"
                colorScheme="teal"
                onClick={() => {
                    send("ON_CLOSE_PERSONAL_INFORMATION_FORM");
                }}
                size="xs"
            >
                Close
            </Button>
        </Flex>
    </Box>
}

const eventMap = [
    "ON_OPEN_CURRENT_ADDRESS_FORM",
    "ON_OPEN_PERMANENT_ADDRESS_FORM",
    "ON_OPEN_PERSONAL_INFORMATION_FORM",
    "ON_OPEN_HEALTH_FORM",
    "ON_OPEN_FAMILY_FORM",
]

export const PersonalInformation = () => {

    const [state, send] = useMachine(personalInformationMachine);

    React.useEffect(() => {
        send('ON_MOUNT', {
            dispatch: null,
        })
    }, [])

    return (
        <Box fontSize="xs">

            <pre>{JSON.stringify(state.value, null, 2)}</pre>
            {/* <Code>{JSON.stringify(state.context, null, 2)}</Code> */}
            <Flex flexWrap="wrap" gap={1} >

                {eventMap.map((eventType: any) => {
                    return <Button key={eventType}
                        rounded="none"
                        colorScheme="teal"
                        onClick={() => {
                            send(eventType);
                        }}
                        size="xs"
                    >
                        {eventType}
                    </Button>
                })}

            </Flex>

            {state.matches("mounted.current_address_form") && <CurrentAddressForm
                send={send}
                formType={FORM_TYPE_CURRENT_ADDRESS}
            />}
            
            <PersonalInformationForm
            isOpen={state.matches("mounted.personal_information_form")}
            onClose={() => {
                send("ON_CLOSE_PERSONAL_INFORMATION_FORM");
            }}
            send={send}
            state={state}

            />
             
            {state.matches("mounted.permanent_address_form") && <CurrentAddressForm
                send={send}
                formType={FORM_TYPE_PERMANENT_ADDRESS}
            />}
            {state.matches("mounted.health_form") && <CurrentAddressForm
                send={send}
                formType={FORM_TYPE_HEALTH}
            />}
            {state.matches("mounted.family_form") && <CurrentAddressForm
                send={send}
                formType={FORM_TYPE_FAMILY}
            />}
        </Box>
    );
}