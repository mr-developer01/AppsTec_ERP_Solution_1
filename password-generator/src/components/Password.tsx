import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  CssBaseline,
  Switch,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";

interface ThemeMode {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Password: React.FC<ThemeMode> = ({ isDarkMode, setIsDarkMode }) => {
  //   const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
     
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
            <ContentCopy
              fontSize="large"
              color={isDarkMode ? "primary" : "secondary"}
            />
          </IconButton>
        </Box>
    </ThemeProvider>
  );
};

export default Password;
