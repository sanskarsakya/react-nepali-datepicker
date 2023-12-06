
// import Button from "@/base/atoms/button/button";

import { VStack } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { ModalForm } from '.';
import { ConnectForm } from '../../atoms/v2/Form/connect-form';
import TextAreaV2 from '../../atoms/v2/Form/rigo-text-area';

const meta: Meta<typeof ModalForm> = {
  component: ModalForm,
  title: 'Molecules/Modal Form',
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    const handleSubmit = (data: any) => {
      if (!data) {
        return;
      }
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    };

    return <ModalForm
      isOpen={true}
      defaultValues={{
        name: "rigo Name",
      }}
      onClose={() => { }}
      showDevTool
      onSubmit={handleSubmit}
      title="Test Title Updated"
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
            <VStack spacing="20px" alignItems="flex-start">

              <TextAreaV2.Default
                label="Name"
                name="name"
                required
                {...inputProps}
              />

            </VStack>
          );
        }}
      </ConnectForm>
    </ModalForm>
  }
};
