import React from "react";
import { Box } from "@chakra-ui/react";
import { useGetPastLaunchesQuery } from "../services/spaceXApi";
import LaunchesList from "../components/LaunchesList/LaunchesList";

const PastLaunches: React.FC = () => {
  const { data: launches, isError, isLoading, refetch } = useGetPastLaunchesQuery();

  return (
    <Box>
      <LaunchesList
        launches={launches}
        isLoading={isLoading}
        error={isError}
        refetch={refetch}
      />
    </Box>
  );
};

export default PastLaunches;
