import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from '../Navbar/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      position="relative"
      minH="100vh"
      bgImage="url('https://images.pexels.com/photos/1738402/pexels-photo-1738402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920')"
      bgSize="cover"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="blackAlpha.700"
        zIndex="1"
      />
      <Box position="relative" zIndex="2">
        <NavBar />
        <Box p={4}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
