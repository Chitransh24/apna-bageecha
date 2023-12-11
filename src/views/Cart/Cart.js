import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import CartItems from "./CartItems";
import {
  BoxStyles,
  ButtonStyles,
  ContainerStyles,
  H3Styles,
  IconButtonStyles,
} from "./CartStyles";
import { Box } from "@mui/system";

function Cart({ toggleCart, open }) {
  const [cartItem, setCartItem] = useState([]);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/user/getCart", config)
        .then((res) => {
          if (res.data.cartItems) {
            setCartItem(res.data.cartItems);
          }
        });
    };
    apiCall();
  }, []);
  return (
    <ContainerStyles open>
      <BoxStyles width fontWeight textTransform>
        <H3Styles>Cart</H3Styles>
        <IconButtonStyles onClick={toggleCart}>
          <CloseIcon />
        </IconButtonStyles>
      </BoxStyles>
      <Box>
        {cartItem.map((product) => (
          <CartItems item={product} />
        ))}
      </Box>
      <Box>
        <BoxStyles marginTop>
          <ButtonStyles
            width="33%"

            // onClick={handleCheckout}
          >
            <Box>Total:</Box>
            <Box>$ </Box>
          </ButtonStyles>
          <ButtonStyles
            marginLeft="0.5rem"
            width="60%"
            height="50px"

            // onClick={handleCheckout}
          >
            CHEKCOUT
          </ButtonStyles>
        </BoxStyles>
      </Box>
    </ContainerStyles>
  );
}

export default Cart;
