// src/components/LaunchCard.tsx
import { Box, Image, Badge, Heading, Text, Stack, Flex, IconButton, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { DEFAULT_LAUNCH_IMAGE } from '../../constants';
import { useFavorites } from '../../hooks/useFavorites';

interface LaunchCardProps {
  key: string;
  id: string;
  name: string;
  date: string;
  location: string;
  success: boolean | null;
  imageUrl?: string;
}

const LaunchCard: React.FC<LaunchCardProps> = (launch) => {
  const { isFavorite, toggleFavorite } = useFavorites(launch);
  const {
    name,
    date,
    location,
    success,
    imageUrl
  } = launch;

  return (
    <Box
      maxW="sm"
      borderWidth="0"  // Remove the border
      borderRadius="lg"
      overflow="hidden"
      bg="rgba(0, 0, 0, 0.2)" // RGBA background
      boxShadow="lg"
      color="white"
      _hover={{ boxShadow: "xl", transform: "scale(1.03)" }}
      transition="all 0.2s"
    >
      <Box p={4}>
        {/* Image and Title Row */}
        <Flex alignItems="center" mb={4}>
          <Image
            src={imageUrl || DEFAULT_LAUNCH_IMAGE}
            alt={name}
            borderRadius="full"       // Make the image circular
            objectFit="cover"
            w="50px"                  // Adjust size to fit as a small circular image
            h="50px"
            mr={4}                    // Add margin to separate image and heading
          />
          <Heading size="md">{name}</Heading>
          <Spacer />
          <IconButton
            onClick={() => toggleFavorite(launch)} 
            marginLeft={8}
            alignSelf="flex-start"
            alignContent="flex-start"
            justifyContent="flex-start"
          >
            {isFavorite ? <FaBookmark /> : <FaRegBookmark />}
          </IconButton>
        </Flex>

        {/* Date and Location */}
        <Stack gap={2}>
          <Text fontSize="sm">Date: {new Date(date).toLocaleDateString()}</Text>
          <Text fontSize="sm">Location: {location}</Text>
        </Stack>

        {/* Status Badge */}
        <Badge
          mt={4}
          colorScheme={success === true ? "green" : success === false ? "red" : "yellow"}
          variant="solid"
          fontSize="0.8em"
          p="1"
          borderRadius="md"
        >
          {success === true ? "Success" : success === false ? "Failure" : "Pending"}
        </Badge>
      </Box>
    </Box>
  );
};

export default LaunchCard;
