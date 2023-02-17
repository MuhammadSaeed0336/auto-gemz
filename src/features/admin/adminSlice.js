import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: () => `getAllAdmins/`,
      providesTags: ["Admin"],
    }),
  }),
});
export const {useGetAllAdminsQuery} = adminApi;
