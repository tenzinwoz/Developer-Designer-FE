import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../../features/alert/alertSlice";

export default function AlertBox() {
  const dispatch = useDispatch();
  const { alerts } = useSelector((state) => state.alertReducer);

  const remove = (id) => {
    dispatch(removeAlert(id));
  };

  return (
    <Stack spacing={2} sx={{ position: "absolute", bottom: "0" }}>
      {alerts?.map((alert) => (
        <Alert
          severity={alert?.type}
          onClose={() => remove(alert?.id)}
          key={alert?.id}
        >
          {alert?.msg}
        </Alert>
      ))}
    </Stack>
  );
}
