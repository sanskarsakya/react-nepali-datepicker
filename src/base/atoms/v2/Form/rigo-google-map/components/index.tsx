import { Box, Button, Circle, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { When } from 'react-if';

const Marker = (props: any) => {
    return <Circle size={6} bg="red.600" />
}

export const GoogleMap = ({ onChange, value }: any) => {

    const [_meta, _setMeta] = React.useState(value)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const defaultProps = {
        center: {
            lat: _meta.lat,
            lng: _meta.lng
        },
        zoom: 11
    };

    return <>
        <Button size="sm" bg="transparent" onClick={onOpen}>{_meta.lat}, {_meta.lng}</Button>
        <When condition={isOpen}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your Location</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box style={{ height: '200px', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDHWdQEZSwcPMPfuWYRQORONGGuGovXzao" }}
                                defaultCenter={{
                                    lat: _meta?.lat ?? 27.700769,
                                    lng: _meta?.lng ?? 85.300140,
                                }}
                                defaultZoom={defaultProps.zoom}
                                onClick={(data: any) => {
                                    const value = {
                                        lat: data.lat,
                                        lng: data.lng,
                                    };
                                    onChange(value)
                                    _setMeta(value)
                                }}
                            >
                                <Marker
                                    lat={_meta.lat}
                                    lng={_meta.lng}
                                />
                            </GoogleMapReact>
                        </Box>
                    </ModalBody>

                    <ModalFooter as={Flex} gap={2}>
                        <Button rounded="none" size="sm" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button rounded="none" size="sm" colorScheme='blue' onClick={() => {
                            onClose()
                        }}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </When>


    </>
}


