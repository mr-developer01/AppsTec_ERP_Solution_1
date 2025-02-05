import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

let sentence =
  "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.";

const BlogCard = () => {
  return (
    <>
      <Box sx={{ marginTop: 6, width: "100%", overflow: "hidden" }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Typography>Engineering</Typography>
        <Typography variant="h5">
          Revolutionizing software development with cutting-edge tools
        </Typography>
        <Typography variant="body2" sx={{ width: "100%" }}>
          {sentence.split(" ").slice(0, 20).join(" ") + "..."}
        </Typography>
      </Box>
      {/* <Grid container spacing={2}>
          <Grid size={{ sm: 12, lg: 6 }}>
            <Typography>size=8</Typography>
          </Grid>
          <Grid size={{ sm: 12, lg: 6 }}>
            <Typography>size=4</Typography>
          </Grid>
        </Grid> */}
    </>
  );
};

export default BlogCard;
