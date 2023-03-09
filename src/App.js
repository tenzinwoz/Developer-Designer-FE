import React, { useState, useEffect } from "react";
import { lightModeTheme, darkModeTheme } from "./muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Landing from "./container/landing/Landing";
import Register from "./container/register/Register";
import Login from "./container/login/Login";
import AlertBox from "./component/alert/AlertBox";
import Dashboard from "./container/dashboard/Dashboard";

function App() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
      <CssBaseline />
      <AlertBox />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
