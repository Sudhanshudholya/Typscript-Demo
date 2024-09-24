import apiSlice from "./apiSlice";

export const AuthSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: '/admin/adminLogin',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthSlice; // Changed to AuthSlice
