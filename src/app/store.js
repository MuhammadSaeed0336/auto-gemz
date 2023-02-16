import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "../features/cars/carSlice";
import { feedApi } from "../features/feedback/feedbackSlice";
import { newCarApi } from "../features/newCars/newCarSlice";
import { rentApi } from "../features/rent/rentSlice";
import { userApi } from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    [newCarApi.reducerPath]: newCarApi.reducer,
    [rentApi.reducerPath]: rentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(carApi.middleware)
      .concat(userApi.middleware)
      .concat(feedApi.middleware)
      .concat(newCarApi.middleware)
      .concat(rentApi.middleware),
  devTools: true,
});
