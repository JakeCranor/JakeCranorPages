import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ className }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMediumOrBelow = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const isHomePage = location.pathname.includes("/home");

  // Different states for different navigation buttons
  const showSplashState = { showSplash: true };
  const skipSplashState = { showSplash: false };

  // Make sure all links to other pages include skipSplash state
  const getNavLinkState = (path) => {
    if (path.includes("/home")) {
      return skipSplashState;
    }
    return undefined;
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Handle smooth scrolling when clicking home links while already on home page
  const handleHomeClick = (event, showSplash) => {
    if (isHomePage) {
      event.preventDefault();

      if (showSplash) {
        // Scroll to top to show splash screen
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to content section
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    }
    // If not on home page, normal navigation will occur
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
        ].map((text, index) => {
          const path =
            index === 0
              ? "/JakeCranorPages/home"
              : index === 1
              ? "/JakeCranorPages/coxprojects"
              : index === 2
              ? "/JakeCranorPages/georgiatechprojects"
              : index === 3
              ? "/JakeCranorPages/personalprojects"
              : "/JakeCranorPages/resume";

          return (
            <ListItem
              button
              key={text}
              component={Link}
              to={path}
              state={getNavLinkState(path)}
              onClick={(event) => {
                if (path.includes("/home")) {
                  handleHomeClick(event, index === 0 ? false : true);
                }
              }}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      className={className}
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 100,
      }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}>
          <Box>
            <Button
              component={Link}
              to="/JakeCranorPages/home"
              state={showSplashState}
              onClick={(event) => handleHomeClick(event, true)}
              sx={{
                ...buttonStyle,
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}>
              Jake Cranor
            </Button>
          </Box>

          {isMediumOrBelow ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Button
                component={Link}
                to="/JakeCranorPages/home"
                state={skipSplashState}
                onClick={(event) => handleHomeClick(event, false)}
                sx={buttonStyle}>
                Home
              </Button>
              <Button
                component={Link}
                to="/JakeCranorPages/coxprojects"
                sx={buttonStyle}>
                Cox Projects
              </Button>
              <Button
                component={Link}
                to="/JakeCranorPages/georgiatechprojects"
                sx={buttonStyle}>
                Georgia Tech Projects
              </Button>
              <Button
                component={Link}
                to="/JakeCranorPages/personalprojects"
                sx={buttonStyle}>
                Personal Projects
              </Button>
              <Button
                component={Link}
                to="/JakeCranorPages/resume"
                sx={buttonStyle}>
                Resume
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
      {drawer}
    </AppBar>
  );
};

export default Navbar;
