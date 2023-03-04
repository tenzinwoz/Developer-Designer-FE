import React, { useState } from "react";
import Button from "@mui/material/Button";
import { lightModeTheme, darkModeTheme } from "./muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./container/landing/Landing";
import Register from "./container/register/Register";
import Login from "./container/login/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
