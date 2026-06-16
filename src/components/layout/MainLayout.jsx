import React, { useState } from "react";
import { Box } from "@mui/material";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const drawerWidth = 5;
const collapsedWidth = 5;
const topbarHeight = 64;

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(v => !v);

  return (
    <Box sx={{ display: "flex" }}>

      {/* Sidebar */}
      <Sidebar open={open} onToggle={toggle} />

      {/* Main content wrapper */}
      <Box
        sx={{
          flexGrow: 1,
          ml: open ? `${drawerWidth}px` : `${collapsedWidth}px`,
          transition: "margin-left 0.3s ease"
        }}
      >

        {/* Topbar stays in normal document flow (NOT overlay) */}
        <Box sx={{ height: topbarHeight, width: "100%" }}>
          <Topbar />
        </Box>

        {/* Page content pushed BELOW topbar */}
        <Box
          component="main"
          sx={{
            p: 3,
            minHeight: `calc(100vh - ${topbarHeight}px)`,
            backgroundColor: "#f5f7fb"
          }}
        >
          {children}
        </Box>

      </Box>
    </Box>
  );
};

export default MainLayout;