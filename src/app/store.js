import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "../features/cars/carSlice";
import { userApi } from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware).concat(userApi.middleware),
  devTools: true,
});