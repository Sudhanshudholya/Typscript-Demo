import ApiSlice from "./ApiSlice";

export const InvoiceSlice = ApiSlice.injectEndpoints({

    endpoints: (builder) => ({

        createInvoice: builder.mutation({
            query: ({ invoiceData, token }: any) => ({
                url: '/invoice/createInvoice',
                method: 'POST',
                body: invoiceData,
                headers: { "x-access-token": token },
            }),
            invalidatesTags: ['invoice']
        }),

        getInvoice: builder.query({
            query: ({ invoiceData, token }: any) => ({
                url: '/invoice/getAllInvoice',
                method: 'GET',
                body: invoiceData,
                headers: { "x-access-token": token },
            }),
            providesTags: ['invoice']
        }),


    }),
});
export const { useCreateInvoiceMutation, useGetInvoiceQuery } = InvoiceSlice
