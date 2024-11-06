import React from 'react';
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Upcoming Launches', path: '/upcoming-launches' },
    { name: 'Past Launches', path: '/past-launches' },
    { name: 'Favorites', path: '/favorites' },
  ];

  return (
    <Box bg="rgba(0, 0, 0, 0.3)" color="white" px={4} py={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="md">🚀 SpaceX Launch Tracker</Heading>

        <Flex gap={6}>
          {navLinks.map((link) => (
            <ChakraLink
              outline="none"
              as={RouterLink}
              to={link.path}
              key={link.path}
              fontSize="md"
              fontWeight="medium"
              color={location.pathname === link.path ? "blue.200" : "white"}
              position="relative"
              px={2}
              pb={1}
              textDecoration="none"
              border="none"
              _focus={{ boxShadow: "none" }}
              _after={{
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: 0,
                left: 0,
                bg: location.pathname === link.path ? 'blue.300' : 'transparent',
                transform: location.pathname === link.path ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease',
              }}
              _hover={{
                _after: {
                  transform: 'scaleX(1)',
                  bg: 'blue.300',
                },
              }}
            >
              {link.name}
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
