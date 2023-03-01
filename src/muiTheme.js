import { createTheme, responsiveFontSizes } from "@mui/material/styles";

//Theme for light mode
let lightModeTheme = createTheme({
  palette: {
    mode: "light",
  },
});
lightModeTheme = responsiveFontSizes(lightModeTheme);

//Theme for dark mode
let darkModeTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
darkModeTheme = responsiveFontSizes(darkModeTheme);

export { lightModeTheme, darkModeTheme };
