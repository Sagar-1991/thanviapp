import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const AddCustApi = createApi({
  reducerPath: 'AddCustApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/details' }),
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: () => `/`,
    }),
    addCustomers:builder.mutation({

        query( cmt ) {
          console.log(cmt)
         return {
            url: `/`,
            method: 'POST',
            body: cmt,
          }
        }
  
          
    }),
    deleteCustomers:builder.mutation({

        query: ( id ) => ({
            url: `/${id}`,
            method: 'DELETE',
            
          }),
  }),
  updateCustomers:builder.mutation({

    query: (cust) => ({
        url: `/${cust.id}`,
        method: 'PUT',
        body:cust
      }),
})
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCustomersQuery,useAddCustomersMutation,useDeleteCustomersMutation,useLazyGetAllCustomersQuery,useUpdateCustomersMutation } = AddCustApi