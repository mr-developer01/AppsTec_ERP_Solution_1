import {
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface ThemeMode {
  isDarkMode: boolean;
}

const PasswordValidationCard: React.FC<ThemeMode> = ({ isDarkMode }) => {
  const [minCharLen, setMinCharLen] = useState<number>(6);

  const handleSlider = (event: any, newValue: any) => {
    if (newValue >= 6) {
      setMinCharLen(event.target.value);
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
          BackgroundColor: "background.paper",
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
            sx={{ color: "#3D3D3D" }}
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
        <Box
          px={6}
          mt={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>STRENGTH</Typography>
          <Box sx={{ display: "flex", gap: ".5rem" }}>
            <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
          </Box>
        </Box>
        <Box mt={4} sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 2,backgroundColor: "#A4FFAF"}}>
          <Typography variant="h2" sx={{fontSize: "1.4rem"}}>GENERATE</Typography>
          <IconButton>
            <ArrowForward
              fontSize="large"
              color={isDarkMode ? "primary" : "secondary"}
            />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PasswordValidationCard;
