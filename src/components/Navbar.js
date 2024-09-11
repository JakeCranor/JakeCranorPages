import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isHorizontal = useMediaQuery("(orientation: landscape)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const buttonStyle = {
    color: "black",
    fontWeight: "bold",
    padding: "8px 16px",
    margin: "0 8px",
    border: "2px solid transparent",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      borderColor: "black",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  };

  const drawer = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      sx={{
        zIndex: theme.zIndex.drawer + 2, // Make sure drawer is above the AppBar
      }}>
      <List>
        {[
          "Home",
          "Cox Projects",
          "Georgia Tech Projects",
          "Personal Projects",
          "Resume",
        ].map((text, index) => (
          <ListItem
            button
            component={Link}
            to={`/${text.replace(/\s+/g, "").toLowerCase()}`}
            onClick={handleDrawerToggle}
            key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "black",
          position: "sticky",
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
          transition: "0.3s",
        }}>
        <Toolbar>
          {/* Mobile Menu Icon */}
          {isMobile && !isHorizontal && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", sm: "none" }, marginRight: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Display buttons only on larger screens */}
          {!isMobile || isHorizontal ? (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              {[
                "Home",
                "Cox Projects",
                "Georgia Tech Projects",
                "Personal Projects",
                "Resume",
              ].map((text, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={Link}
                  to={`/${text.replace(/\s+/g, "").toLowerCase()}`}
                  sx={buttonStyle}>
                  {text}
                </Button>
              ))}
            </Box>
          ) : null}
        </Toolbar>
        {drawer}
      </AppBar>
      {/* Main content goes here */}
    </>
  );
};

export default Navbar;
