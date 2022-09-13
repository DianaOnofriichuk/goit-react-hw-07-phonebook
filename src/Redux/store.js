import { configureStore } from '@reduxjs/toolkit'
import { filter, contactsApi } from './reducer'

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})
export default store
