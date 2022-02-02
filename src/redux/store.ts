import { configureStore } from "@reduxjs/toolkit";
import gifListReducer from "./slices/gifSlice";

export const store = configureStore({
  reducer: {
    gifList: gifListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
