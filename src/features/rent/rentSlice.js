import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const rentApi = createApi({
  reducerPath: "rentApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["Rent"],
  endpoints: (builder) => ({
    getAllRentCars: builder.query({
      query: () => `getAllRentCars/`,
      providesTags: ["Rent"],
    }),
  }),
});
export const {
    useGetAllRentCarsQuery
} =rentApi
