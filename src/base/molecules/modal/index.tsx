import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalProps,
} from '@chakra-ui/react';
import { Body } from './body';
import { Content } from './content';
import { Footer } from './footer';
import { Header } from './header';
import { Overlay } from './overlay';


interface _ModalProps extends ModalProps {}

/**
 * USUAGE
 *
 <Modal
 isOpen={true}
 onClose={() => { }}
 >
 <Modal.Overlay />
 <Modal.Content>
 <Modal.CloseBtn />
 <Modal.Header>This is test header</Modal.Header>
 <Modal.Body>
 This is modal body
 </Modal.Body>
 <Modal.Footer>
 <Box display="flex">
 test
 </Box>
 </Modal.Footer>
 </Modal.Content>
 </Modal>

 * @param param0
 * @returns
 */
export const Modal: any = ({ children, ...rest }: _ModalProps) => {
  return (
    <ChakraModal closeOnOverlayClick={false} {...rest}>
      {children}
    </ChakraModal>
  );
};

Modal.Content = Content;
Modal.Header = Header;
Modal.CloseBtn = ModalCloseButton;
Modal.Footer = Footer;
Modal.Body = Body;
Modal.Overlay = Overlay;

