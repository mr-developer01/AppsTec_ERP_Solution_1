import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const ImageGrid = ({ authorData }) => {

  if (!authorData) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {authorData.map((data) => (
            <Grid size={{xs:12, sm: 12, md: 6, lg: 3 }} key={data.id}>
              <Item>
                <Box sx={{ width: "100%" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 400,
                      width: "100%",
                      borderRadius: "20px",
                      // maxHeight: { xs: 233, md: 167 },
                      // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={data?.download_url}
                  />
                </Box>
                <Typography>{data?.author}</Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ImageGrid;
