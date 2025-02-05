import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Nav = () => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "10px",
          backgroundColor: "white",
          paddingY: 2,
          paddingX: 2,
          boxShadow: 1,
          mb: 8,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "GrayText",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 40 },
              maxWidth: { xs: 350, md: 40 },
              borderRadius: "50%",
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Features
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Testimonials
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Highlights
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              Features
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined">Sign in</Button>
          <Button sx={{ backgroundColor: "#3e3e3e", color: "white" }}>
            Sign up
          </Button>
        </Box>
      </Box>
  );
};

export default Nav;
