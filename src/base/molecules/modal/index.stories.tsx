// import Button from "@/base/atoms/button/button";

import { Box } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { Modal } from '.';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Molecules/Modal',
};

export default meta;

export const Default = {
  args: {},
  render: () => {
    return <Modal isOpen={true} onClose={() => { }}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.CloseBtn />
        <Modal.Header>This is test header</Modal.Header>
        <Modal.Body>This is modal body</Modal.Body>
        <Modal.Footer>
          <Box display='flex'>test</Box>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  }
};
