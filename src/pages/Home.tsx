import React from 'react';
import { Flex, Box, Heading, Text, VStack } from '@chakra-ui/react';
import TwitterFeed from '../components/TwitterFeed/TwitterFeed';
import Spinner from '../components/Spinner/Spinner';
import { useFetchRecentTweetsQuery } from '../services/spaceXApi';

const Home: React.FC = () => {
  const { data: tweets, isLoading } = useFetchRecentTweetsQuery();

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minH="70vh">
        <Spinner />
      </Box>
    );
  }

  console.log(tweets, 'tweets')

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
      bgImage="url('/path-to-your-background.jpg')" // Optional background for the welcome text
      bgSize="cover"
      p={8}
      minH="100vh"
    >
      <VStack gap={6} maxW="800px">
        <Heading as="h1" size="2xl" fontWeight="bold">
          Welcome to SpaceX Launch Tracker 🚀
        </Heading>
        <Text fontSize="xl" opacity={0.85}>
          Embark on a journey to explore the cosmos together. Track upcoming launches, revisit past missions, 
          and stay up-to-date with the latest in space exploration. Together, let's push the boundaries of what's possible.
        </Text>
        {tweets && (
          <Box w="300px" mt={10} display={{ base: 'none', lg: 'block' }}>
            <TwitterFeed tweets={tweets} />
          </Box>
        )}
      </VStack>

    </Flex>
  );
};

export default Home;
