import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ResponsiveBtns from "./ResponsiveBtns";
import Cart from "../../views/Cart/Cart";
import { BoxStyle, LinkStyle, Typography1Style } from "./HomeStyle";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const toggleCart = () => {
    setOpen(!open);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
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
          <Link to={"/"}>
            {/* <Typography1Style
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
          // sx={{
              //   mr: 4,
              //   ml: 2,
              //   display: { xs: "none", md: "flex" },
              //   fontFamily: "Nunito",
              //   fontWeight: 700,
              //   letterSpacing: ".3rem",
              //   color: "black",
              //   textDecoration: "none",
              // }}
            >
              Logo
            </Typography1Style> */}
          </Link>

          <BoxStyle sx={{ display: { xs: "flex", md: "none" } }}>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography1Style color="black" textAlign="left">
                  <LinkStyle to={`/home`}>home</LinkStyle>
                  <LinkStyle to={`/pricing`}>plant & pricing</LinkStyle>
                  <LinkStyle to={`/product`}>product</LinkStyle>
                  <LinkStyle to={`/contact`}>contact</LinkStyle>
                  <LinkStyle to={`/aboutus`}>About Us</LinkStyle>
                </Typography1Style>
              </MenuItem>
            </Menu>
          </BoxStyle>

          <Typography1Style
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          >
            Logo
          </Typography1Style>
          <BoxStyle sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
            <LinkStyle to={`/home`}>home</LinkStyle>
            <LinkStyle to={`/pricing`}>plant & pricing</LinkStyle>
            <LinkStyle to={`/product`}>product</LinkStyle>
            <LinkStyle to={`/contact`}>contact</LinkStyle>
            <LinkStyle to={`/aboutus`}>About Us</LinkStyle>
          </BoxStyle>
          {/* cart items field */}
          {open && <Cart toggleCart={toggleCart} open={open} />}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <ResponsiveBtns toggleCart={toggleCart}></ResponsiveBtns>
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
