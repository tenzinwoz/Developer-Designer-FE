import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    removeAlert: (state, action) => {
      const newList = state.alerts.filter(
        (alert) => alert?.id !== action.payload
      );
      state.alerts = newList;
    },
    addAlert: (state, action) => {
      const customId = uniqid();
      state.alerts.unshift({
        msg: action.payload.msg,
        type: action.payload.type,
        id: customId,
      });
      //TODO: Can i remove this error after sometime
      // setTimeout(()=>{
      //   removeAlert(customId)
      // },5000)
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
