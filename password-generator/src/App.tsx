import "@fontsource/Montserrat";
import Password from "./components/Password";
import PasswordValidationCard from "./components/PasswordValidationCard";
import { Container, CssBaseline } from "@mui/material";
import { darkTheme } from "./theme/darkTheme";
import { lightTheme } from "./theme/lightTheme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  console.log(isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "background.primary",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: "2rem",
          border: "1px solid #464646"
        }}
      >
        <Password isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <PasswordValidationCard isDarkMode={isDarkMode} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
