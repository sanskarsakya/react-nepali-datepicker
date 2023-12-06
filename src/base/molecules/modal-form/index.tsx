// FOLLOWING RENDER PROPS PATTERN

import { Flex } from '@chakra-ui/react';
import Button from '../../atoms/button/button';
import { ConnectForm } from '../../atoms/v2/Form/connect-form';
import { FormProvider } from '../../atoms/v2/Form/form-provider';
import { Modal } from '../modal';

interface ModalProps {
  modalProps?: any;
  modalBodyProps?: any;
  renderHeader?: any;
  renderModalFooter?: any;
  isOpen?: boolean;
  isCentered?: boolean;
  onClose?: any;
  showDevTool?: any;
  editMode?: boolean;
  onSubmit?: any;
  submitButtonLabel?: string;
  defaultValues: any;
  title?: any;
  children?: any;
  resolver?: any;
}

export const ModalForm = (props: ModalProps) => {
  const {
    modalProps,
    modalBodyProps,
    renderHeader,
    renderModalFooter,
    isCentered,
    isOpen,
    onClose,
    showDevTool,
    onSubmit,
    defaultValues,
    submitButtonLabel,
    title,
    editMode,
    children,
  } = props;

  return (
    <>
      <Modal
        isOpen={isOpen}
        isCentered={isCentered}
        onClose={onClose}
        {...modalProps}
      >
        <Modal.Overlay />
        <FormProvider
          showDevTool={showDevTool}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        >
          <Modal.Content>
            <Modal.CloseBtn />
            <Modal.Header>
              {renderHeader?.() || title}
            </Modal.Header>
            <Modal.Body {...modalBodyProps}>{children}</Modal.Body>
            <Modal.Footer>
              <ConnectForm>
                {({ formState: { isValid, isSubmitting } }: any) => {
                  return (
                    renderModalFooter?.({ isValid, isSubmitting, onClose }) || (
                      <Flex>
                        <Button
                          buttonType='secondary'
                          mr='12px'
                          onClick={onClose}
                        >
                          Close
                        </Button>
                        <Button
                          type='submit'
                          buttonType='primary'
                          disabled={isSubmitting}
                          isLoading={isSubmitting}
                        >
                          {submitButtonLabel || (editMode ? 'Update' : 'Save')}
                        </Button>
                      </Flex>
                    )
                  );
                }}
              </ConnectForm>
            </Modal.Footer>
          </Modal.Content>
        </FormProvider>
      </Modal>
    </>
  );
};

