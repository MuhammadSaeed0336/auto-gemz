import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => {
        // debugger
        return {
          url: `login/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            // debugger
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            // debugger
            return response.status;
          },
          invalidatesTags: ["auth"],
        };
      },
    }),
  }),
});
export const {
  useLoginUserMutation,
} = authApi;
