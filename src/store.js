import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./features/alert/alertSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    alertReducer: alertSlice,
    userReducer: userSlice,
  },
});
