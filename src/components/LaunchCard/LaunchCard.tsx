import { Box, Image, Badge, Heading, Text, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { DEFAULT_LAUNCH_IMAGE } from '../../constants';
import { ILaunch } from '../../types';

interface LaunchCardProps {
  launch: ILaunch;
  handleDetailsClick?: () => void;
  toggleFavorite: (launch: ILaunch) => void; // New prop for toggling favorites
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, handleDetailsClick, toggleFavorite }) => {
  const {
    name,
    date_utc,
    success,
    links,
  } = launch;

  return (
    <Box
      maxW="320px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="rgba(255, 255, 255, 0.05)"
      borderColor="rgba(255, 255, 255, 0.1)"
      boxShadow="lg"
      color="white"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
        borderColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Box
        position="relative"
        _hover={{
          "&::after": {
            opacity: 0.3
          },
        }}
      >
        <Image
          src={links?.patch?.small || DEFAULT_LAUNCH_IMAGE}
          alt={name}
          objectFit="cover"
          opacity={0.6}
          w="100%"
          h="150px"
          transition="opacity 0.3s ease-in-out"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
          transition="opacity 0.3s ease-in-out"
          opacity="0"
          pointerEvents="none"
          _hover={{ opacity: 0.5 }}
        />
      </Box>

      <Box p={4}>
        <Flex alignItems="center" justifyContent="space-between" mb={2}>
          <Heading size="sm">
            {name}
          </Heading>
          <IconButton
            outline="none"
            bg="transparent"
            onClick={(e) => {
              e.stopPropagation(); // Prevent propagation to card click
              toggleFavorite(launch); // Use the toggleFavorite prop
            }}
            marginLeft={8}
            alignSelf="flex-start"
            alignContent="flex-start"
            justifyContent="flex-start"
          >
            {launch.isFavorite ? <FaBookmark /> : <FaRegBookmark />}
          </IconButton>
        </Flex>
        <Text fontSize="xs" color="gray.300" mb={2}>
          Date: {new Date(date_utc).toLocaleDateString()}
        </Text>
        <Badge
          colorScheme={success === true ? "green" : success === false ? "red" : "yellow"}
          variant="solid"
          fontSize="0.7em"
          px={2}
          py={1}
          borderRadius="md"
          textTransform="capitalize"
        >
          {success === true ? "Success" : success === false ? "Failure" : "Pending"}
        </Badge>
        {handleDetailsClick && <Text
          mt={3}
          fontSize="sm"
          color="blue.300"
          textAlign="right"
          textDecoration="underline"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering card click
            handleDetailsClick();
          }}
          cursor="pointer"
        >
          View Details
        </Text>}
      </Box>
    </Box>
  );
};

export default LaunchCard;
