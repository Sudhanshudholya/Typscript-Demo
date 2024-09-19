// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const BASE_URL = import.meta.env.VITE_API_URL

// export const apislice = createApi({
//   reducerPath: "apislice",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL
//   }),
//   endpoints : (builder) => ({})
// })



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL

export const usersApiSlice = createApi({
  reducerPath: 'Ack Infra',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
export default usersApiSlice
export const { useLoginMutation } = usersApiSlice;
