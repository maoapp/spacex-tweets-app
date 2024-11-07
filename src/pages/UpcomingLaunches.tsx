import React, { useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useGetUpcomingLaunchesQuery } from "../services/spaceXApi";
import FilterBar from "../components/FilterBar/FilterBar";
import LaunchesList from "../components/LaunchesList/LaunchesList";
import { normalizeDate } from "../utils/utils";

const UpcomingLaunches: React.FC = () => {
  const [filterDate, setFilterDate] = useState<string>("");
  const { data: launches, isError, isLoading, refetch } = useGetUpcomingLaunchesQuery();

  const handleChangeDate = (value: string) => {
    setFilterDate(value);
  };

  const handleCleanFilter = () => {
    setFilterDate("");
  };

  const filteredLaunches = useMemo(() => {
    return launches?.filter((launch) => {
      const normalizedLaunchDate = normalizeDate(launch.date_utc);
      return !filterDate || normalizedLaunchDate === filterDate;
    });
  }, [launches, filterDate]);

  return (
    <Box>
      <FilterBar
        query={filterDate}
        handleChangeQuery={handleChangeDate}
        cleanInput={handleCleanFilter}
      />
      <LaunchesList
        launches={filteredLaunches}
        isLoading={isLoading}
        error={isError}
        refetch={refetch}
      />
    </Box>
  );
};

export default UpcomingLaunches;
