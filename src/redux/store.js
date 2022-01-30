import { configureStore } from "@reduxjs/toolkit";
import gifListReducer from "./slices/gifSlice";

export default configureStore({
  reducer: {
    gifList: gifListReducer,
  },
});
