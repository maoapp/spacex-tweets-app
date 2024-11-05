import React from 'react';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box position="relative" minH="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" overflow="hidden">
      
      {/* Background image with overlay */}
      <Box position="fixed" inset="0" zIndex="-1">
        <Image
          src="https://images.pexels.com/photos/1738402/pexels-photo-1738402.jpeg"
          alt="Space background"
          objectFit="cover"
          w="100vw"
          h="100vh"
          position="fixed"
          top="0"
          left="0"
        />
        {/* Dark overlay */}
        <Box position="absolute" inset="0" bg="blackAlpha.600" />
      </Box>

      {/* Content */}
      <Box zIndex="10" textAlign="center" p="8">
        <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" color="white" mb="6" letterSpacing="widest">
          Space-X Tracker
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.200" maxW="2xl" mx="auto">
          Tracking launches, missions, and achievements across the cosmos
        </Text>
      </Box>

      {/* Decorative Button */}
      <Box zIndex="10" mt="8">
        <Button
          colorScheme="blue"
          size="lg"
          px="8"
          py="3"
          fontWeight="bold"
          borderRadius="full"
          transition="all 0.3s"
          _hover={{ transform: 'scale(1.05)' }}
        >
          Explore Missions
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
