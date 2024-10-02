import apiSlice from "./apiSlice";

export const ProductSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    addProduct: builder.mutation({
      query: ({ productData, token } : {productData: string, token: any}) => ({
        url: 'product/addProduct',
        method: 'POST',
        body: productData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product']
    }),

    getProduct: builder.query({
      query: ({ token }: {token: string}) => ({
        url: 'product/getproduct',
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['product']
    }),

    getSingleProduct: builder.query({
      query: ({token, id}: {token: string, id: string}) => ({
      url: `product/getSingleProduct/${id}`,
      method: 'GET',
      headers: {"x-access-token" : token},
      }),
      providesTags: ['product']
    }),

    editProduct: builder.mutation({
      query: ({ productData, id, token }: {productData: string, id: string, token: string}) => ({
        url: `product/updateProduct/${id}`,
        method: 'PUT',
        body: productData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product']
    }),

    deleteProduct: builder.mutation({
      query: ({ id, token }: {id: string, token: string}) => ({
        url: `product/deleteProduct/${id}`,
        method: 'DELETE',
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['product']
    }),

  }),
});

export const {useAddProductMutation, useGetProductQuery, useGetSingleProductQuery, useEditProductMutation, useDeleteProductMutation} = ProductSlice

