import apiSlice from "./apiSlice";


export const ProductSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    addProduct: builder.mutation({
      query: ({ userData, token }) => ({
        url: 'product/addProduct',
        method: 'POST',
        body: userData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']
    }),

    getProduct: builder.query({
      query: ({ token }) => ({
        url: 'product/getproduct?',
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['customer']
    }),

    editProduct: builder.mutation({
      query: ({ userData, id, token }) => ({
        url: `product/updateProduct/${id}`,
        method: 'PUT',
        body: userData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']
    }),

    deleteProduct: builder.mutation({
      query: ({ id, token }) => ({
        url: `product/deleteProduct/${id}`,
        method: 'DELETE',
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']

    }),

  }),
});

export const {useAddProductMutation, useGetProductQuery, useEditProductMutation, useDeleteProductMutation} = ProductSlice
