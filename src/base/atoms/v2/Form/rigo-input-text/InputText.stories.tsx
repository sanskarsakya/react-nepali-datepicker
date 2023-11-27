import { Button, Container, Flex } from "@chakra-ui/react";
import type { Meta } from "@storybook/react";
import InputTextV2 from ".";
import { ConnectForm } from "../connect-form";
import { FormProvider } from "../form-provider";


const Story: Meta<typeof InputTextV2> = {
  title: "V2/Forms/Input Text V2",
  component: () => {

    return (
      <FormProvider
        onSubmit={(data: any) => {
          console.log({
            data,
          });
        }}
        defaultValues={{
          empty: "",
          default: "default",
          composed: "composed",
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

            return (
              <Container
                maxW="xl"
                py={5}
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <InputTextV2.Default
                  name="empty"
                  label="Empty"
                  required={true}
                  {...inputProps}
                />

                <InputTextV2.Default
                  name="default"
                  label="Default"
                  required
                  {...inputProps}
                />

                <InputTextV2
                  name="composed"
                  label="Composed"
                  required
                  {...inputProps}
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

                <InputTextV2.Default
                  name="uncontrolled"
                  label="Uncontrolled"
                  value={"uncontrolled"}
                  onChange={(name: string, value: string) => {
                    console.log({ name, value });
                  }}
                />

                <Flex>
                  <Button type="submit">Submit</Button>
                </Flex>
              </Container>
            );
          }}
        </ConnectForm>
      </FormProvider>
    );
  },
};


export default Story;

export const Default = {
  args: {},
};


