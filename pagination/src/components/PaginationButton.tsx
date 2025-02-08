import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PaginationButton = () => {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        mt={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          sx={{ paddingX: 2, paddingY: 2, borderRadius: "100%" }}
        >
          <KeyboardArrowLeft sx={{ fontSize: 30 }} />
        </Button>
        {arr.map((data, index) => (
          <Button
          key={index}
            variant="outlined"
            sx={{ paddingX: 1.8, paddingY: 1.8, borderRadius: "50%" }}
          >
            <Typography fontSize={20}>{index + 1}</Typography>
          </Button>
        ))}
        <Button
          variant="contained"
          sx={{ paddingX: 2, paddingY: 2, borderRadius: "100%" }}
        >
          <KeyboardArrowRight sx={{ fontSize: 30 }} />
        </Button>
      </Stack>
    </>
  );
};

export default PaginationButton;
