import usersApiSlice from "./UserApiSlice";

export const AuthSlice = usersApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
          query: (userData) => ({
            url: '/admin/adminLogin',
            method: 'POST',
            body: userData,
          }),
        }),
      }),
})

export const {useLoginMutation} = AuthSlice