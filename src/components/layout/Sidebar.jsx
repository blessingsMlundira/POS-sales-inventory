import React from "react";
import { NavLink } from "react-router-dom";

import {
  Dashboard,
  PointOfSale,
  Inventory,
  People,
  Settings,
  MenuOpen,
  Payments,
  Menu
} from "@mui/icons-material";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";

const drawerWidth = 250;
const collapsedWidth = 72;

const Sidebar = ({ open = true, onToggle }) => {

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/" },
    { text: "Sales", icon: <PointOfSale />, path: "/sales" },
    { text: "Inventory", icon: <Inventory />, path: "/inventory" },
    // { text: "Customers", icon: <People />, path: "/customers" },
    // { text: "Payroll", icon: <Payments />, path: "/payroll" }
    
  ];

  const toggleDrawer = () => {
    if (onToggle) onToggle();
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        transition: "width 0.3s ease",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: "border-box",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          transition: "width 0.3s ease"
        }
      }}
    >
      {/* Header / Toggle Section */}
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "space-between" : "center",
          alignItems: "center",
          px: 1
        }}
      >
        {open && (
          <Typography variant="subtitle1" fontWeight="bold">
            POS System
          </Typography>
        )}

        <IconButton onClick={toggleDrawer}>
          {open ? <MenuOpen /> : <Menu />}
        </IconButton>
      </Toolbar>

      <Divider />

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            end={item.path === "/"}
            sx={{
              justifyContent: open ? "initial" : "center",
              px: 2,
              py: 1.5,
              '&.active': {
                bgcolor: 'action.selected'
              }
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : 0,
                justifyContent: "center"
              }}
            >
              {item.icon}
            </ListItemIcon>

            {open && (
              <ListItemText primary={item.text} />
            )}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;