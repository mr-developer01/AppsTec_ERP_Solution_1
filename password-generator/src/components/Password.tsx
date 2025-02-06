import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography, IconButton, CssBaseline, Switch } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

// Define light theme
const lightTheme = createTheme({
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

// Define dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue
    },
    background: {
      default: "#292929", // Dark gray
      paper: "#3D3D3D", // Darker gray
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

function Password() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Reset CSS and apply background color */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: "2rem",
          minHeight: "100vh",
        }}
      >
        {/* Theme Toggle Switch */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1">Toggle Theme</Typography>
          <Switch checked={isDarkMode} onChange={toggleTheme} />
        </Box>

        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ fontSize: "1.5rem", color: "text.secondary" }}
        >
          Password Generator
        </Typography>
        <Box
          mt={4}
          sx={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "background.paper",
            paddingX: 6,
          }}
        >
          <Box sx={{ width: "60%", color: "text.secondary" }}>
            <Typography variant="h4">P4$W0rD!</Typography>
          </Box>
          <IconButton>
            <ContentCopy fontSize="large" color={isDarkMode ? "primary" : "secondary"} />
          </IconButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Password;