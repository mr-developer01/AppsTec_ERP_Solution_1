import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { pageArray } from "../utils/constants";

const PaginationButton = ({ page, setPage, totalLength }) => {
  const [pages, setPages] = React.useState(page);
  const totalPages = Math.ceil(totalLength / 10);

  console.log(totalLength);

  const handleChange = (event: any) => {
    console.log(event);
    const selectedPage = event.target.value;
    setPages(selectedPage);
    setPage(selectedPage);
  };

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
        {pageArray.map((data, index) => (
          <Button
            onClick={() => setPage(data)}
            key={index}
            variant={page === data ? "contained" : "uncontained"}
            sx={{ paddingX: 1.8, paddingY: 1.8, borderRadius: "50%" }}
          >
            <Typography fontSize={20}>{index + 1}</Typography>
          </Button>
        ))}
        {page > 5 && (
          <>
            <Button variant="text">...</Button>
            <Button
              variant="contained"
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
      <Box
        mt={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography>
          Page {page} of {Math.ceil(totalLength / 10)}
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Pages</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={pages}
            label="Pages"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Pages</em>
            </MenuItem>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default PaginationButton;
