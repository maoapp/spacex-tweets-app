import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="40vh">
      <Text fontSize="lg" color="whiteAlpha.800">
        {message}
      </Text>
    </Box>
  );
};

export default EmptyState;
