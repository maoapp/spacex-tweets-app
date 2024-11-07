import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import LaunchCard from "../../components/LaunchCard/LaunchCard";
import Spinner from "../../components/Spinner/Spinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import EmptyState from "../../components/EmptyState/EmptyState";
import LaunchDetailsModal from "../../components/LaunchDetailsModal/LaunchDetailsModal";
import { useGetLaunchpadByIdQuery } from "../../services/spaceXApi";
import { ILaunch } from "../../types";
import { useFavorites } from "../../hooks/useFavorites";

interface LaunchesListProps {
  launches: ILaunch[] | undefined;
  isLoading: boolean;
  error: boolean;
  refetch: () => void;
}

const LaunchesList: React.FC<LaunchesListProps> = ({ launches, isLoading, error, refetch }) => {
  const [selectedLaunchpad, setSelectedLaunchpad] = useState<string | null>(null);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { data: launchpadDetails, isFetching: isLaunchpadLoading } = useGetLaunchpadByIdQuery(
    selectedLaunchpad || "",
    {
      skip: !selectedLaunchpad,
    }
  );


  const handleCloseModal = () => {
    setShowModalDetails(false);
    setSelectedLaunchpad(null);
  };

  const getDetails = (launchpadId: string) => {
    setSelectedLaunchpad(launchpadId);
    setShowModalDetails(true);
  };

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" minH="70vh">
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="70vh">
        <ErrorMessage message="Error loading launches" onRetry={refetch} />
      </Box>
    );
  }

  if (!launches || launches.length === 0) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH="70vh">
<       EmptyState message="There are no launches to show" />
      </Box>
    );
  }

  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={4}>
        {launches.map((launch) => (
          <LaunchCard
            key={launch.id}
            launch={{
              ...launch,
              isFavorite: isFavorite(launch),
            }}
            toggleFavorite={toggleFavorite}
            handleDetailsClick={() => getDetails(launch.launchpad)}
          />
        ))}
      </Grid>
      <LaunchDetailsModal
        isOpen={showModalDetails}
        onClose={handleCloseModal}
        launch={launchpadDetails}
        loading={isLaunchpadLoading}
      />
    </>
  );
};

export default LaunchesList;
