import { configureStore } from "@reduxjs/toolkit";
import usersApiSlice from "./UserApiSlice";


const Store = configureStore({

  reducer: {
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(usersApiSlice.middleware)
})

export default Store