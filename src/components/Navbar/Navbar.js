import * as React from "react";
import { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NotificationsNone } from "@mui/icons-material";
import AbButton from "../AbButton/AbButton";
import { Link } from "react-router-dom";

const pages = [
  "Home",
  "Our Services",
  "Plant & Pricing",
  "Blogs",
  "Resources",
  "Product",
  "Contact",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [active, setActive] = useState(0);
  const [authActive, setAuthActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  const handleAuthActive = (index) => {
    setAuthActive(index);
  };
  console.log(authActive, "auth");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", color: "#618264" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 4,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "#618264", textAlign: "center" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              {/* <Button
                sx={{
                  backgroundColor: "#618264",
                  p: -1,
                  color: "#fff",
                  borderRadius: ".8rem",
                  fontSize: "0.8rem",
                  marginLeft: ".5rem",
                  ":hover": { backgroundColor: "black" },
                }}
              >
                Upgrade now
              </Button> */}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Nunito",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 3 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  height: "80px",
                  color: "#black",
                  display: "block",
                  fontFamily: "Nunito",
                  fontSize: "1rem",
                  fontWeight: "500" ,
                  marginLeft: ".5rem",
                  textTransform: "none" ,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                sx={{
                  backgroundColor: "#618264",
                  color: "#fff",
                  borderRadius: ".8rem",
                  marginRight: "1.5rem",
                  fontSize: "0.8rem",
                  fontFamily: "Nunito",
                  ":hover": { backgroundColor: "black" },
                }}
              >
                Upgrade now
              </Button>
              <IconButton
                sx={{
                  background: "#618264",
                  p: -2,
                  color: "#fff",
                  ":hover": { backgroundColor: "black" },
                }}
              >
                <NotificationsNone sx={{ p: 0 }} />
              </IconButton>

              <Link to="/login">
                <AbButton
                  sx={{
                    color: authActive === 0 ? "#FFFFFF" : "#618264",
                    backgroundColor: authActive === 0 ? "#618264" : "#D0E7D2",
                    borderRadius: "15px",
                    height: "2.5rem",
                    textTransform: "none",
                    fontSize: "16px",
                    padding: "0px 1rem",
                    position: "relative",
                    left: "30px",
                    zIndex: authActive ? "" : 9,
                  }}
                  variant="contained"
                  onClick={() => {
                    handleAuthActive(0);
                  }}
                  text="Login"
                  color="light"
                />
              </Link>

              <Link to="/signup">
                <AbButton
                  sx={{
                    color: authActive === 1 ? "#FFFFFF" : "#618264",
                    backgroundColor: authActive === 1 ? "#618264" : "#D0E7D2",
                    borderRadius: "15px",
                    height: "2.5rem",
                    textTransform: "none",
                    fontSize: "16px",
                    padding: "0px 1rem",
                    marginLeft: "1.1rem",
                  }}
                  variant="contained"
                  onClick={() => handleAuthActive(1)}
                  text="Signin"
                  color="light"
                />
              </Link>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
