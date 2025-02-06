import React, { useRef, useState } from "react";
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
  generatedPass: string | number;
}

const Password: React.FC<ThemeMode> = ({
  isDarkMode,
  setIsDarkMode,
  generatedPass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  // console.log(textRef, "TextRef....");

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
    // navigator.clipboard.writeText(text);
    // alert("Password copied to clipboard!");
  };

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
          position: "relative",
        }}
      >
        {copied && (
          <Typography sx={{ position: "absolute", right: 38, bottom: -25 }}>
            Copied!
          </Typography>
        )}
        <Box sx={{ width: "60%", color: "text.secondary" }}>
          <Typography variant="h4" ref={textRef}>
            {generatedPass || "P4$W0rD!"}
          </Typography>
        </Box>
        <IconButton>
          <ContentCopy
            onClick={() => handleCopy(textRef.current.innerText)}
            fontSize="large"
            color={isDarkMode ? "primary" : "secondary"}
          />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};

export default Password;
