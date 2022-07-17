import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./Auth/authSlice";
import invoiceSlice from "./Document/invoiceSlice";
import modalSlice from './ui/modalSlice';
import companySlice from "./company/companySlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    invoices: invoiceSlice,
    modal: modalSlice,
    company: companySlice
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch