import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import React from 'react';

interface FilterBarProps {
  query: string;
  handleChangeQuery: (value: string) => void;
  cleanInput: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ query, handleChangeQuery, cleanInput }) => {
  const closeAction = () => (
    <IconButton
      bg="transparent"
      onClick={cleanInput}
      outline="none"
      size="sm"
      aria-label="Clear input"
      position="absolute"
      right={7}
      zIndex="1"
      _hover={{ color: 'gray.500' }}
    >
      <FaTimes />
    </IconButton>
  );

  return (
    <Box bg="rgba(0, 0, 0, 0.6)" p={4} color="white" borderRadius="md">
      <Heading size="md" mb={2}>Filter by Date</Heading>
      <Flex gap={4} align="center">
        <Input
          type="date"
          value={query}
          onChange={(e) => handleChangeQuery(e.target.value)}
          bg="rgba(0, 0, 0, 0.4)"
          color="whiteAlpha.900"
          borderColor="gray.600"
          _placeholder={{ color: 'gray.400' }}
          css={{
            '&::-webkit-calendar-picker-indicator': {
              filter: 'invert(1)',
              zIndex: '2',
            },
          }}
          pr="2rem"
        />
        {query && closeAction()}
      </Flex>
    </Box>
  );
};

export default FilterBar;
