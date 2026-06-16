import React from "react";
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

import CloudDoneIcon from "@mui/icons-material/CloudDone";

const Topbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dynamics POS Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CloudDoneIcon color="success" />
          <Typography>Dynamics Connected</Typography>
          <Avatar>A</Avatar>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Topbar;