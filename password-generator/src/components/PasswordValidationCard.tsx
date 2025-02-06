import {
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";

interface ThemeMode {
  isDarkMode: boolean;
}

const PasswordValidationCard: React.FC<ThemeMode> = ({ isDarkMode }) => {
  const [minCharLen, setMinCharLen] = useState<number>(6);

  const handleSlider = (event, newValue) => {
    if (newValue >= 6) {
      setMinCharLen(newValue);
    }

    // setMinCharLen(newValue);
    // console.log(event, newValue);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box
        py={2}
        mt={2}
        sx={{
          width: "80%",
          color: "text.secondary",
          backgroundColor: "background.paper",
        }}
        className="abc"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 6,
          }}
        >
          <Typography variant="h2" sx={{ fontSize: "1rem" }}>
            Character Length
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "1rem" }}>
            {minCharLen}
          </Typography>
        </Box>
        <Box mt={1} px={6}>
          <Slider
            value={minCharLen}
            onChange={handleSlider}
            defaultValue={minCharLen}
            aria-label="Default"
            valueLabelDisplay="auto"
            max={50}
            disabled={minCharLen < 6}
            sx={{color: "black"}}
          />
        </Box>
        <Box px={6}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Include Uppercase Letters"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Include Lowercase Letters"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Include Numbers"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Include Symbols"
            />
          </FormGroup>
        </Box>
        <Box></Box>
      </Box>
    </ThemeProvider>
  );
};

export default PasswordValidationCard;
