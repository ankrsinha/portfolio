import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
        }}
      >
        <Toolbar className="flex justify-between max-w-7xl mx-auto w-full">

          {/* Left: Name */}
          <Typography variant="h6" className="font-bold">
            Ankur
          </Typography>

          {/* Desktop Menu */}
          <div className="space-x-4 hidden md:block">
            {navItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                component={NavLink}
                to={item.path}
                sx={{
                  "&.active": {
                    color: "#818cf8",
                    fontWeight: "bold",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#020617",
            color: "white",
            width: 250,
          },
        }}
      >
        <List className="mt-10">
          {navItems.map((item) => (
            <ListItem
              button
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={toggleDrawer(false)}
              sx={{
                "&.active": {
                  color: "#818cf8",
                  backgroundColor: "rgba(99,102,241,0.1)",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}