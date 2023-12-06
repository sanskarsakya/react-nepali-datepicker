import { ModalOverlay, ModalOverlayProps } from '@chakra-ui/react'

interface OverlayProps extends ModalOverlayProps { }
export const Overlay = (props: OverlayProps) => {
    return <ModalOverlay {...props} />
}
