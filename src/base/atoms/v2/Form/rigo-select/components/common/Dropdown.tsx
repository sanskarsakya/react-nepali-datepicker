import { Box } from '@chakra-ui/react';
import { Blanket } from './Blanket';
import { Menu } from './Menu';

export const Dropdown = ({ children, isOpen, target, onClose }: any) => (
  <Box position="relative">
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </Box>
);
