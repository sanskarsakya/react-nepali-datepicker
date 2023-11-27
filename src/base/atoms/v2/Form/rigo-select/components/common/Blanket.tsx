import { Box } from '@chakra-ui/react';
import React from 'react';

export const Blanket = (props: any) => (
  <Box
    bottom={0}
    top={0}
    left={0}
    right={0}
    position="fixed"
    zIndex={1}
    {...props}
  >
    {props.children}
  </Box>
);
