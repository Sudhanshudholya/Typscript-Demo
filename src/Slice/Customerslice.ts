import ApiSlice from "./ApiSlice";

export const CustomerSlice = ApiSlice.injectEndpoints({

  endpoints: (builder) => ({

    addCustomer: builder.mutation({
      query: ({ userData, token }: any) => ({
        url: '/users/addUser',
        method: 'POST',
        body: userData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']
    }),

    getCustomer: builder.query({
      query: ({ token }: any) => ({
        url: '/users/getAllUsers',
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['customer']
    }),

    getSingleCustomer: builder.query({
      query: ({ token, id }: any) => ({
        url: `users/getUserById/${id}`,
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['customer']
    }),

    editCustomer: builder.mutation({
      query: ({ userData, id, token }: any) => ({
        url: `/users/updateUserDetails/${id}`,
        method: 'PUT',
        body: userData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']

    }),

    deleteCustomer: builder.mutation({
      query: ({ id, token }: any) => ({
        url: `/users/deleteUser/${id}`,
        method: 'DELETE',
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']
    }),

  }),
});

export const { useAddCustomerMutation, useGetCustomerQuery, useGetSingleCustomerQuery, useDeleteCustomerMutation, useEditCustomerMutation } = CustomerSlice

