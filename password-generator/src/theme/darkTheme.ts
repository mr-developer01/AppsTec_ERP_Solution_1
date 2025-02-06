import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#292929",
      paper: "#3D3D3D",
    },
    text: {
      primary: "#BDBDBD",
      secondary: "#7C7C7C",
    },
  },
  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
    h2: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontWeight: 700,
    },
    button: {
      fontWeight: 500,
    },
  },
});