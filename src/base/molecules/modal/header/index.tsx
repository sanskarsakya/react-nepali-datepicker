import { ModalHeader, ModalHeaderProps } from "@chakra-ui/react";

interface HeaderProps extends ModalHeaderProps {
}

export const Header = ({ children, ...rest }: HeaderProps) => {
    return (
      <ModalHeader borderBottom="1px solid" borderColor="gray.200" fontWeight="500" {...rest}>
        {children}
      </ModalHeader>
    );
}

