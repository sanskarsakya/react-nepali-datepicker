import { Button, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import GoogleMapV2 from '.';
import { ConnectForm } from '../connect-form';
import { FormProvider } from '../form-provider';

const meta: Meta<typeof GoogleMapV2> = {
  title: 'V2/Forms/Google Map',
  component: GoogleMapV2,
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    return (
      <FormProvider
        onSubmit={(data: any) => {
          console.log({
            data,
          });
        }}
        defaultValues={{
          default: {
           

          },
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
                maxW='xl'
                py={5}
                display='flex'
                flexDirection='column'
                gap={3}
              >
                <GoogleMapV2.Default
                  name='default'
                  label='Default'
                  required
                  {...inputProps}
                />

                <Flex>
                  <Button type='submit'>Submit</Button>
                </Flex>
              </Container>
            );
          }}
        </ConnectForm>
      </FormProvider>
    );
  },
};
