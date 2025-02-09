import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const arr = [1, 2, 3, 4, 5];

const PaginationButton = ({ page, setPage, totalLength }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < Math.ceil(totalLength / 10)) setPage(page + 1);
    console.log("Next Clicked");
  };

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
          onClick={handlePrev}
        >
          <KeyboardArrowLeft sx={{ fontSize: 30 }} />
        </Button>
        {arr.map((data, index) => (
          <Button
            onClick={() => setPage(data)}
            key={index}
            variant="outlined"
            sx={{ paddingX: 1.8, paddingY: 1.8, borderRadius: "50%" }}
          >
            <Typography fontSize={20}>{index + 1}</Typography>
          </Button>
        ))}
        {page > 5 && (
          <>
            <Button variant="text">...</Button>
            <Button
              variant="outlined"
              sx={{ paddingX: 1.8, paddingY: 1.8, borderRadius: "50%" }}
            >
              <Typography fontSize={20}>{page}</Typography>
            </Button>
          </>
        )}
        <Button
          variant="contained"
          sx={{ paddingX: 2, paddingY: 2, borderRadius: "100%" }}
          onClick={handleNext}
        >
          <KeyboardArrowRight sx={{ fontSize: 30 }} />
        </Button>
      </Stack>
      <Box>
        <Typography>
          Page {page} of {Math.ceil(totalLength / 10)}
        </Typography>
      </Box>
    </>
  );
};

export default PaginationButton;
