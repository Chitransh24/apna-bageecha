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
          <Link to={"/"}>
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
              Logo
            </Typography>
          </Link>

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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    color: "#618264",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/home`}
                  >
                    home
                  </Link>
                  {/* <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/ourservices`}
                  >
                    our services
                  </Link> */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/pricing`}
                  >
                    plant & pricing
                  </Link>
                  {/* <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/blogs`}
                  >
                    blogs
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/resources`}
                  >
                    resources
                  </Link> */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/product`}
                  >
                    product
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/contact`}
                  >
                    contact
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#618264",
                      marginLeft: "15px",
                      textTransform: "capitalize",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                    }}
                    to={`/aboutus`}
                  >
                    About Us
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 0,
              ml: 0,
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
            <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/home`}
            >
              home
            </Link>
            {/* <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/ourservices`}
            >
              our services
            </Link> */}
            <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/pricing`}
            >
              plant & pricing
            </Link>
            {/* <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/blogs`}
            >
              blogs
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/resources`}
            >
              resources
            </Link> */}
            <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/product`}
            >
              product
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/contact`}
            >
              contact
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#618264",
                marginLeft: "15px",
                textTransform: "capitalize",
                fontFamily: "Nunito",
                fontWeight: 500,
              }}
              to={`/aboutus`}
            >
              About Us
            </Link>
          </Box>
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
