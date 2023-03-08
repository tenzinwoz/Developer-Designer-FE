import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    addAlert: (state, action) => {
      const customId = uniqid();
      state.alerts.unshift({
        msg: action.payload.msg,
        type: action.payload.type,
        id: customId,
      });
    },
  },
});

export const { addAlert } = alertSlice.actions;
export default alertSlice.reducer;
