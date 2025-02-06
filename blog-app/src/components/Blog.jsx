import React from "react";
import { Box, Typography, Grid2 as Grid } from "@mui/material";
import BlogNav from "./BlogNav";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h3" style={{ fontWeight: 500 }} gutterBottom>
            Blog
          </Typography>
          <Typography variant="body2">
            Stay in the loop with the latest about our products
          </Typography>
        </Box>
        <BlogNav />
        <Grid container spacing={2} sx={{width: "100%"}}>
          <Grid size={{ sm: 12, md: 12, lg: 6 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ sm: 12, md: 12, lg: 6 }}>
            <BlogCard />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{width: "100%"}}>
          <Grid size={{ sm: 12, md: 12, lg: 4 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ sm: 12, md: 12, lg: 4 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ sm: 12, md: 12, lg: 4 }}>
            <BlogCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Blog;
