import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import type { Meta } from "@storybook/react";
import { FormProvider } from "../FormProvider";
import ConnectForm from "../ConnectForm";
import RadioGroupV2 from ".";

const RADIO_OPTIONS = [
  {
    label: "one",
    value: "1",
  },
  {
    label: "Two",
    value: "2",
  },
  {
    label: "Three",
    value: "3",
  },
];

const Wrapper = ({ children }: any) => {
  return (
    <Flex gap={3} p={4} rounded='md'>
      {children}
    </Flex>
  );
};

const Item = ({ option, isDisabled, isInvalid, ...rest }: any) => {
  return (
    <Box
      cursor='pointer'
      borderWidth='1px'
      borderRadius='md'
      boxShadow='md'
      _focus={{
        boxShadow: "outline",
      }}
      px={5}
      py={3}
      {...rest}
      transition='all .2s ease-in-out '
      _hover={{
        bg: "teal.600",
        color: "white",
        transform: "scale(1.25)",
        borderColor: "teal.800",
      }}
      _checked={{
        bg: "teal.600",
        color: "white",
        borderColor: "teal.600",
      }}
    >
      <Text>{option.label}</Text>
    </Box>
  );
};

const Story: Meta<typeof RadioGroupV2> = {
  title: "V2/Forms/RadioGroup",
  component: () => {
    return (
      <ChakraProvider>
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            default: "3",
            composed: "1",
            empty: "",
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                formState: { errors },
              } = formProps;

              const inputProps = {
                control,
                errors,
              };

              const commonProps = {
                options: RADIO_OPTIONS,
                // components: {
                //   item: Item,
                //   wrapper: Wrapper,
                // },
              };

              return (
                <Container
                  maxW='xl'
                  py={5}
                  display='flex'
                  flexDirection='column'
                  gap={3}
                >
                  <RadioGroupV2.Default
                    name='empty'
                    label='Empty'
                    isDisabled={true}
                    {...inputProps}
                    required
                    components={{
                      item: Item,
                      wrapper: Wrapper,
                    }}
                    {...commonProps}
                  />

                  <RadioGroupV2.Default
                    name='default'
                    label='Default'
                    {...inputProps}
                    required
                    {...commonProps}
                  />

                  <RadioGroupV2
                    name='composed'
                    label='Composed'
                    {...inputProps}
                    required
                    isDisabled={true}
                    {...commonProps}
                  >
                    <RadioGroupV2.FormControl>
                      <Flex gap={2}>
                        <RadioGroupV2.FormLabel />
                        <RadioGroupV2.HelperText />
                      </Flex>
                      <RadioGroupV2.Component bg="red" />
                      <RadioGroupV2.ErrorLabel />
                    </RadioGroupV2.FormControl>
                  </RadioGroupV2>

                  <RadioGroupV2.Default
                    name='uncontrolled'
                    label='Uncontrolled'
                    value={"1"}
                    onChange={(name: string, value: string) => {
                      console.log({ name, value });
                    }}
                    {...commonProps}
                  />

                  <Flex>
                    <Button type='submit'>Submit</Button>
                  </Flex>
                </Container>
              );
            }}
          </ConnectForm>
        </FormProvider>
      </ChakraProvider>
    );
  },
};
export default Story;

export const Default = {
  args: {},
};
