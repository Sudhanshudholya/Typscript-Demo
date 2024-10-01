import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Ensure your environment variable is properly set
const BASE_URL = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['customer', 'product', 'category'],
  endpoints: () => ({}), // You can add or inject endpoints later
});

export default apiSlice;
