import React, { useState, useMemo } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { useGetUpcomingLaunchesQuery } from '../services/spaceXApi';
import LaunchCard from '../components/LaunchCard/LaunchCard';
import Spinner from '../components/Spinner/Spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import FilterBar from '../components/FilterBar/FilterBar';
import { normalizeDate } from '../utils/utils';
import EmptyState from '../components/EmptyState/EmptyState';

const UpcomingLaunches: React.FC = () => {
  const [filterDate, setFilterDate] = useState<string>('');
  const { data: launches, error, isLoading, refetch } = useGetUpcomingLaunchesQuery();

  const handleChangeDate = (value: string) => {
    setFilterDate(value);
  };

  const handleCleanFilter = () => {
    setFilterDate('');
  };

  const filteredLaunches = useMemo(() => {
    return launches?.filter((launch) => {
      const normalizedLaunchDate = normalizeDate(launch.date_utc);
      return !filterDate || normalizedLaunchDate === filterDate;
    });
  }, [launches, filterDate]);

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minH="100vh">
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="100vh">
        <ErrorMessage message="Error loading upcoming launches" onRetry={refetch} />
      </Box>
    );
  }

  return (
    <>
      <FilterBar 
        query={filterDate}
        handleChangeQuery={handleChangeDate}
        cleanInput={handleCleanFilter}
      />
      {filteredLaunches && filteredLaunches.length > 0 ? (
        <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={4}>
          {filteredLaunches.map((launch) => (
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
      ) : <EmptyState message="No launches match the selected filter. Try adjusting the date or clearing the filter." />}
    </>
  );
};

export default UpcomingLaunches;
