import React from "react";
import { Button } from "@mui/material";
import { NotificationsNone, Person, ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ButtonWrapper,
  IconButtonStyles,
  LoginButtonStyles,
  SignupButtonStyles,
} from "./ResponsiveBtnsStyles";

function ResponsiveBtns({ toggleCart }) {
  const [items, setItems] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userInfo"));
    // console.log("Agya", items)
    if (items) {
      setItems(items);
    }
  }, []);

  const [active, setActive] = useState(0);
  const [authActive, setAuthActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  const handleAuthActive = (index) => {
    setAuthActive(index);
  };

  useEffect(() => {}, [items]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  var logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <ButtonWrapper style={{ display: "flex" }}>
      {items ? (
        <>
          <Button className="res-btn">Your plan</Button>

          <IconButtonStyles className="icon-btn">
            <NotificationsNone className="notification" sx={{ p: 0 }} />
          </IconButtonStyles>

          <IconButtonStyles className="icon-btn">
            <Person className="notification" sx={{ p: 0 }} />
          </IconButtonStyles>

          <IconButtonStyles className="icon-btn" onClick={toggleCart}>
            <ShoppingCart className="notification" sx={{ p: 0 }} />
          </IconButtonStyles>
        </>
      ) : (
        <>
          {" "}
          <Button className="res-btn">Upgrade</Button>
          <Link to="/login">
            <LoginButtonStyles
              authActive={authActive}
              className="login"
              variant="contained"
              onClick={() => {
                handleAuthActive(0);
              }}
              text="Login"
              color="light"
            />
          </Link>
          <Link to="/signup">
            <SignupButtonStyles
              authActive={authActive}
              className="signup"
              variant="contained"
              onClick={() => handleAuthActive(1)}
              text="Signin"
              color="light"
            />
          </Link>{" "}
        </>
      )}
    </ButtonWrapper>
  );
}

export default ResponsiveBtns;
