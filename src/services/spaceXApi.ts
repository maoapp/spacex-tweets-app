import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILaunch } from '../types';
import { API_HOST } from '../constants';

export const spaceXApi = createApi({
  reducerPath: 'spaceXApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_HOST }),
  endpoints: (builder) => ({
    getUpcomingLaunches: builder.query<ILaunch[], void>({
      query: () => 'api/launches/upcoming',
    }),
    getPastLaunches: builder.query<ILaunch[], void>({
      query: () => 'api/launches/past',
    }),
  }),
});

export const {
  useGetUpcomingLaunchesQuery,
  useGetPastLaunchesQuery,
} = spaceXApi;
