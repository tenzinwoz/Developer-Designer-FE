import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function AlertBox() {
  const { alerts } = useSelector((state) => state.alertReducer);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {alerts?.map((alert) => (
        <Alert severity={alert?.type}>{alert?.msg}</Alert>
      ))}
    </Stack>
  );
}
