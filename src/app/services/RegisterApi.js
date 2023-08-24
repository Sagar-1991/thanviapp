import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const RegisterApi = createApi({
  reducerPath: 'RegisterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
  endpoints: (builder) => ({
    getAllRegisterDet: builder.query({
      query: () => `/`,
    }),
    addRegisterDet:builder.mutation({

        query: (user) => ({
            url: `/`,
            method: 'POST',
            body: user,
          }),
          
    }),
   
getUserRegisterDet:builder.query({

    query: (userDetails ) =>`?phonenumber=${userDetails.phonenumber}&password=${userDetails.password}`
})
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllRegisterDetQuery,useAddRegisterDetMutation,useGetUserRegisterDetQuery,useLazyGetUserRegisterDetQuery }=RegisterApi