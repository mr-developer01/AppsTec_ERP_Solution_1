import { Box, colors, TextField, Typography } from "@mui/material";
import React from "react";

const BlogNav = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between"}}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: 4 }}>
        <Typography
          variant="body2"
          sx={{
            color: "#7c7c7c",
            border: "1px solid #656565",
            borderRadius: "6px",
            paddingY: 0.5,
            paddingX: 1,
            cursor: "pointer",
          }}
        >
          All categories
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#7c7c7c", cursor: "pointer" }}
        >
          Company
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#7c7c7c", cursor: "pointer" }}
        >
          Product
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#7c7c7c", cursor: "pointer" }}
        >
          Design
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#7c7c7c", cursor: "pointer" }}
        >
          Engineering
        </Typography>
      </Box>
      <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Box>
  );
};

export default BlogNav;
