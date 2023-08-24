import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const LogindetApi = createApi({
  reducerPath: 'LogindetApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
  endpoints: (builder) => ({
    getAllLoginDet: builder.query({
      query: () => `/`,
    }),
    addLoginDet:builder.mutation({

        query: (user) => ({
            url: `/`,
            method: 'POST',
            body: user,
          }),
          
    }),
  
getUserLoginDet:builder.query({

    query: (userDetails ) =>`?phonenumber=${userDetails.phonenumber}&password=${userDetails.password}`
})
  }),
})


export const { useGetAllLoginDetQuery,useAddLoginDetMutation,
  useDeleteLoginDetMutation,useUpdateLoginDetMutation,useLazyGetAllLoginDetQuery ,useGetUserLoginDetQuery,useLazyGetUserLoginDetQuery}=LogindetApi