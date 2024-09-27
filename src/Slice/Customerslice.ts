import apiSlice from "./apiSlice";

export const Customerslice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    addCustomer: builder.mutation({
      query: ({ userData, token }) => ({
        url: '/users/addUser',
        method: 'POST',
        body: userData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']
    }),

    getCustomer: builder.query({
      query: ({ token }) => ({
        url: '/users/getAllUsers',
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['customer']
    }),

    editCustomer: builder.mutation({
      query: ({ userData, id, token }) => ({
        url: `/users/updateUserDetails/${id}`,
        method: 'PUT',
        body: userData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']

    }),

    deleteCustomer: builder.mutation({
      query: ({ id, token }) => ({
        url: `/users/deleteUser/${id}`,
        method: 'DELETE',
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']

    }),

  }),
});

export const { useAddCustomerMutation, useGetCustomerQuery, useDeleteCustomerMutation, useEditCustomerMutation } = Customerslice

