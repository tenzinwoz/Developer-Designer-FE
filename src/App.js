import React, { useState } from "react";
import Button from "@mui/material/Button";
import { lightModeTheme, darkModeTheme } from "./muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkModeTheme : lightModeTheme}>
      <CssBaseline />
      <div className="App">
        <Button variant="contained" className="primary-btn">
          Hello World
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
