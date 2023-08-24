import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { AddCustApi } from './services/AddCustApi';
import { LogindetApi } from './services/LogindetApi';
import userSlice from '../Pages/userSlice';
import { AddPropertyApi } from './services/AddPropertyApi';
import { RegisterApi } from './services/RegisterApi';


export const store = configureStore({
  reducer: {
    userSlice:userSlice,
    
    [AddCustApi.reducerPath]: AddCustApi.reducer,
    [LogindetApi.reducerPath]:LogindetApi.reducer,
    [AddPropertyApi.reducerPath]:AddPropertyApi.reducer,
    [RegisterApi.reducerPath]:RegisterApi.reducer,
    
},

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(AddCustApi.middleware,LogindetApi.middleware,AddPropertyApi.middleware,RegisterApi.middleware),
})
setupListeners(store.dispatch)