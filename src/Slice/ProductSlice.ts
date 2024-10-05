import apiSlice from "./apiSlice";

export const ProductSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    addProduct: builder.mutation({
      query: ({ productData, token } : any) => ({
        url: 'product/addProduct',
        method: 'POST',
        body: productData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product']
    }),

    getProduct: builder.query({
      query: ({ token }: any) => ({
        url: 'product/getproduct',
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['product']
    }),

    getSingleProduct: builder.query({
      query: ({token, id}: any) => ({
      url: `product/getSingleProduct/${id}`,
      method: 'GET',
      headers: {"x-access-token" : token},
      }),
      providesTags: ['product']
    }),

    editProduct: builder.mutation({
      query: ({ productData, id, token }: any) => ({
        url: `product/updateProduct/${id}`,
        method: 'PUT',
        body: productData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product']
    }),

    deleteProduct: builder.mutation({
      query: ({ id, token }: any) => ({
        url: `product/deleteProduct/${id}`,
        method: 'DELETE',
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product']
    }),

  }),
});

export const {useAddProductMutation, useGetProductQuery, useGetSingleProductQuery, useEditProductMutation, useDeleteProductMutation} = ProductSlice

