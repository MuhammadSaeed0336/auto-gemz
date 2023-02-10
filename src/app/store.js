import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "../features/cars/carSlice";
export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
  devTools: true,
});