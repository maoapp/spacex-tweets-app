import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="lg" fontWeight="bold" color="white">
        {message}
      </Text>
      <Button
        mt={2}
        onClick={onRetry}
        colorScheme="blue"
        variant="outline"
        _hover={{ bg: 'none' }}
      >
        <Text fontWeight="bold" color="white">
          Try it again
        </Text>
      </Button>
    </Box>
  );
};

export default ErrorMessage;
