import ApiSlice from "./ApiSlice";

export const AuthSlice = ApiSlice.injectEndpoints({
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

