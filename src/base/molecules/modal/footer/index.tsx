
import { ModalFooter, ModalFooterProps } from '@chakra-ui/react';
interface FooterProps extends ModalFooterProps {}
export const Footer = ({ children, ...rest }: FooterProps) => {
  return (
    <ModalFooter borderTop="1px solid" borderColor="gray.200" marginTop="15px" {...rest}>
      {children}
    </ModalFooter>
  );
};

