import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        
      </Typography>
      <Divider />
      <ul  style={{fontFamily:"Times-New-Roman"}} className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/menu"} >Courses</NavLink>
        </li> */}
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Signin"}>Register</NavLink>
        </li>
        <li>
          <NavLink to={"/Login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "gray" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={" white"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
               
               <h2 style={{fontFamily:"Times-New-Roman"}}> e-Tutoria</h2>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul style={{fontFamily:"Times-New-Roman"}} className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                   <h6 style={{fontFamily:"Times-New-Roman"}}>  Home</h6>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/menu"}>  <h6 style={{fontFamily:"Times-New-Roman"}}> Courses</h6></NavLink>
                </li> */}
                <li>
                  <NavLink to={"/about"}>  <h6 style={{fontFamily:"Times-New-Roman"}}> About</h6></NavLink>
                </li>
                <li>
                  <NavLink to={"/Signin"}>  <h6 style={{fontFamily:"Times-New-Roman"}}> Register</h6></NavLink>
                </li>
                <li>
                  <NavLink to={"/Login"}>  <h6 style={{fontFamily:"Times-New-Roman"}}> Login</h6></NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>  <h6 style={{fontFamily:"Times-New-Roman"}}>  Contact</h6></NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;