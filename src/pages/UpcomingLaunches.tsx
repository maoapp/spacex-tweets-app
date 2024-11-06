import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { useGetUpcomingLaunchesQuery } from '../services/spaceXApi';
import LaunchCard from '../components/LaunchCard/LaunchCard';
import Spinner from '../components/Spinner/Spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const UpcomingLaunches: React.FC = () => {
  const { data: launches, error, isLoading, refetch } = useGetUpcomingLaunchesQuery();

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minH="100vh">
        <Spinner />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="100vh">
        <ErrorMessage message="Error loading upcoming launches" onRetry={refetch} />
      </Box>
    )
  };

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={4}>
      {launches?.map((launch) => (
        <LaunchCard
          key={launch.id}
          id={launch.id}
          name={launch.name}
          date={launch.date_utc}
          location={launch.launchpad}
          success={launch.success}
          imageUrl={launch.links?.patch?.small || ''}
        />
      ))}
    </Grid>
  );
};

export default UpcomingLaunches;
