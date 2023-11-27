import { Box } from '@chakra-ui/react';
import React from 'react';

// styled components
export const Menu = (props: any) => {
  // const shadow = "hsla(218, 50%, 10%, 0.1)";
  return (
    <Box
      bg="white"
      borderRadius={1}
      boxShadow="md"
      mt={2}
      position="absolute"
      zIndex={2}
      {...props}
    >
      {props.children}
    </Box>
  );
};
