import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";
import { ArrowForward } from "@mui/icons-material";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import { useStrength } from "./hooks/useStrength";
import { useCheckStrength } from "./hooks/useCheckStrength";

interface ThemeMode {
  isDarkMode: boolean;
  setGeneratedPass: (newVal: string | number) => void;
}

const PasswordValidationCard: React.FC<ThemeMode> = ({
  isDarkMode,
  setGeneratedPass,
}) => {
  const [minCharLen, setMinCharLen] = useState<number>(6);
  const [chooseOptions, setChooseOptions] = useState<any>({
    lowerCase: true,
    upperCase: true,
    symbols: true,
    nums: true,
  });

  const genResultPass = usePasswordGenerator(minCharLen, chooseOptions);
  const NumberOfboxNotTick = useStrength(chooseOptions);
  const strength = useCheckStrength(NumberOfboxNotTick, genResultPass);
  console.log(strength);

  const genPass = () => {
    setGeneratedPass(genResultPass);
  };

  const handleSlider = (event: any, newValue: any) => {
    if (newValue >= 6) {
      setMinCharLen(event.target.value);
    }
  };

  const handleCheck = (key: string) => {
    setChooseOptions((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
              control={<Checkbox checked={chooseOptions.upperCase} />}
              label="Include Uppercase Letters"
              onClick={() => handleCheck("upperCase")}
            />
            <FormControlLabel
              control={<Checkbox checked={chooseOptions.lowerCase} />}
              label="Include Lowercase Letters"
              onClick={() => handleCheck("lowerCase")}
            />
            <FormControlLabel
              control={<Checkbox checked={chooseOptions.nums} />}
              label="Include Numbers"
              onClick={() => handleCheck("nums")}
            />
            <FormControlLabel
              control={<Checkbox checked={chooseOptions.symbols} />}
              label="Include Symbols"
              onClick={() => handleCheck("symbols")}
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
            {strength === "excellent" && (
              <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            )}
            {(strength === "strong" || strength === "excellent") && (
              <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            )}
            {(strength === "good" ||
              strength === "strong" ||
              strength === "excellent") && (
              <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            )}
            {(strength === "weak" ||
              strength === "good" ||
              strength === "strong" ||
              strength === "excellent") && (
              <Box py={1} px={0.2} sx={{ border: "1px solid #989898" }}></Box>
            )}
          </Box>
        </Box>
        <Box
          mt={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            backgroundColor: "#A4FFAF",
            cursor: "pointer",
          }}
          onClick={genPass}
        >
          <Typography variant="h2" sx={{ fontSize: "1.4rem" }}>
            GENERATE
          </Typography>
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
