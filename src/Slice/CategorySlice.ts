import ApiSlice from "./ApiSlice";

export const CategorySlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({

    addCategory: builder.mutation({
      query: ({ categoryData, token }: any) => ({
        url: 'category/addcategory',
        method: 'POST',
        body: categoryData,
        headers: { "x-access-token": token }
      }),
      invalidatesTags: ["category"]
    }),

    getCategory: builder.query({
      query: ({ token }: any) => ({
        url: 'category/getAllCategory',
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['category']
    }),

    getSingleCategory: builder.query({
      query: ({ token, id }: any) => ({
        url: `category/getSingleCategory/${id}`,
        method: 'GET',
        headers: { "x-access-token": token },
      }),
      providesTags: ['category']
    }),

    editCategory: builder.mutation({
      query: ({ categoryData, id, token }: any) => ({
        url: `category/editCategory/${id}`,
        method: 'PUT',
        body: categoryData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['category']
    }),
  }),
});

export const { useAddCategoryMutation, useGetCategoryQuery, useGetSingleCategoryQuery, useEditCategoryMutation } = CategorySlice


