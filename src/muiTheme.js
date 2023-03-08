import { createTheme, responsiveFontSizes } from "@mui/material/styles";

//Theme for light mode
let lightModeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#206D08",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
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
