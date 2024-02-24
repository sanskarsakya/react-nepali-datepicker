import { Button, Container, Flex } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import Select from '.';
import { ConnectForm } from '../connect-form';
import { FormProvider } from '../form-provider';

const SELECT_OPTIONS = [
    {
      label: 'one',
      value: '1',
    },
    {
      label: 'Two',
      value: '2',
    },
    {
      label: 'Three',
      value: '3',
    },
  ],
  STATUS_OPTIONS = [
    { value: '1', label: 'Done', bg: 'green.500', color: 'white' },
    {
      value: '2',
      label: 'Backlog',
      bg: 'gray.300',
      color: 'gray.900',
    },
    {
      value: '3',
      label: 'Selected For Development',
      bg: 'gray.300',
      color: 'gray.900',
    },
    {
      value: '4',
      label: 'In Progress',
      bg: 'blue.500',
      color: 'white',
    },
  ],
  PRIORITY_OPTIONS = [
    { value: 'highest', label: 'Highest', icon: 'up' },
    { value: 'high', label: 'High', icon: 'up' },
    { value: 'medium', label: 'Medium', icon: 'up' },
    { value: 'low', label: 'Low', icon: 'down' },
    { value: 'lowest', label: 'Lowest', icon: 'down' },
  ],
  REPORTER_OPTIONS = [
    {
      value: '1',
      label: 'Lord Gaben',
      src: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    },
    {
      value: '2',
      label: 'Baby Yoda',
      src: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    },
    {
      value: '3',
      label: 'Pickle Rick',
      src: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    },
  ],
  Story: Meta<typeof Select> = {
    title: 'V2/Forms/Select',
    component: () => {
      const commonProps = {
        options: SELECT_OPTIONS,
      };

      return (
        <FormProvider
          onSubmit={(data: any) => {
            console.log({
              data,
            });
          }}
          defaultValues={{
            empty: '2',
            default: SELECT_OPTIONS[1],
            composed: SELECT_OPTIONS[2],
            status: STATUS_OPTIONS[1],
            priority: PRIORITY_OPTIONS[1],
            reporter: REPORTER_OPTIONS[1],
          }}
          showDevTool
        >
          <ConnectForm>
            {(formProps: any) => {
              const {
                control,
                reset,
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
                  <Select.Default
                    name='empty'
                    label='Empty'
                    required
                    returnScalarValue
                    getOptionLabel={(option: any) =>
                      `${option.label}: ${option.value}`
                    }
                    {...inputProps}
                    {...commonProps}
                  />

                  {/* <Select.Default
                  name="default"
                  label="Default"
                  {...inputProps}
                  isDisabled
                  required
                  {...commonProps}
                />

                <Select
                  name="composed"
                  label="Composed"
                  {...inputProps}
                  required
                  {...commonProps}
                >
                  <Select.FormControl>
                    <Flex gap={2}>
                      <Select.FormLabel />
                    </Flex>
                    <Select.Component />
                    <Select.HelperText />
                    <Select.ErrorLabel />
                  </Select.FormControl>
                </Select>
*/}
                  {/* <Select.Default
                  name="uncontrolled"
                  label="Uncontrolled"
                  // returnScalarValue
                  value={value}
                  isClearable={true}
                  onChange={(name: string, value: string) => {
                    console.log({ name, value });
                    setValue(value)
                  }}
                  {...commonProps}
                /> */}

                  <Flex>
                    <Button type='submit'>Submit</Button>
                    <Button
                      type='button'
                      onClick={() => {
                        reset({
                          empty: '',
                        });
                      }}
                    >
                      Reset
                    </Button>
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
