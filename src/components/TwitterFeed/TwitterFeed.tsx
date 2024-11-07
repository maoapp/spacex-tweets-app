import React from "react";
import { Box, Text, VStack, Link } from "@chakra-ui/react";
import { TweetsResponse } from "../../types";
import EmptyState from "../EmptyState/EmptyState";

interface TwitterFeedProps {
  tweets: TweetsResponse;
}

const TwitterFeed: React.FC<TwitterFeedProps> = ({ tweets }) => {
  if (!tweets || tweets.data.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="300px">
        <EmptyState message="No recent tweets available." />
      </Box>
    );
  }

  return (
    <VStack
      align="start"
      gap={4}
      p={4}
      bg="rgba(0, 0, 0, 0.3)"
      borderRadius="md"
      maxH="500px"
      overflowY="auto"
      w="100%"
    >
      <Text fontSize="lg" fontWeight="bold" color="white">
        Latest Tweets
      </Text>
      {tweets.data.map((tweet) => (
        <Box key={tweet.id} w="100%">
          <VStack align="start" gap={2} p={2} bg="rgba(255, 255, 255, 0.05)" borderRadius="md" w="100%">
            <Text fontSize="sm" color="gray.300">
              {new Date(tweet.created_at).toLocaleString()}
            </Text>
            <Text color="white" fontSize="md">
              {tweet.text}
            </Text>
            {tweet.author_id && (
              <Link
                href={`https://twitter.com/i/user/${tweet.author_id}`}
                color="blue.300"
                fontSize="sm"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "underline" }}
              >
                View Author Profile
              </Link>
            )}
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

export default TwitterFeed;
