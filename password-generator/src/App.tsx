import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/Montserrat";
import { Box, Container, Typography } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Password from "./components/Password";

// Create a custom theme with Rubik as the default font
const theme = createTheme({
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

function App() {
  return (
    <>
      <Password />
    </>
  );
}

export default App;
