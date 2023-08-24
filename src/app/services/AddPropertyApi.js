import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const AddPropertyApi = createApi({
  reducerPath: 'AddPropertyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/properties' }),
  endpoints: (builder) => ({
    getAllPropertydet: builder.query({
      query: () => `/`,
    }),
    addPropertydet:builder.mutation({

        // query: (user) => ({
        //     url: `/`,
        //     method: 'POST',
        //     body: user,
        //   }),
        query( user ) {
          console.log(user)
         return {
            url: `/`,
            method: 'POST',
            body: user,
          }
        }
  
          
    }),


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllPropertydetQuery,useAddPropertydetMutation,useLazyGetAllPropertydetQuery}=AddPropertyApi