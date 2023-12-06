
import { ModalBody, ModalBodyProps } from "@chakra-ui/react";

interface BodyProps extends ModalBodyProps {}
export const Body = ({ children, ...rest }: BodyProps) => {
  return (
    <ModalBody px={6} py={0} {...rest}>
      {children}
    </ModalBody>
  );
};

export default Body;
