import { ModalContent, ModalContentProps } from '@chakra-ui/react'

// const index = ModalContent
interface _ModalContent extends ModalContentProps { }
export const Content = ({ children, ...rest }: _ModalContent) => {
    return (
        <ModalContent {...rest} p={0}>{children}</ModalContent>
    )
}
