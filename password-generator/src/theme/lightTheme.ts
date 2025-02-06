import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2", // Blue
      },
      background: {
        default: "#f5f5f5", // Light gray
        paper: "#BDBDBD", // White
      },
      text: {
        primary: "#292929", // Black
        secondary: "#7C7C7C", // Gray
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