import React from "react";
import YourCartDetails from "./YourCartDetails";
import src from "../../assets/LandingImage3.jpeg";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import AbTextfield from "../../components/AbTextfield/AbTextfield";

function YourCart() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f8f8f8",
        position: "relative",
        fontFamily: "Nunito",
      }}
    >
      <div
        style={{
          color: "#618264",
          position: "relative",
          top: "3%",
          left: "7%",
          fontSize: "1.7rem",
          fontWeight: 500,
        }}
      >
        Your Cart
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "1rem",
          fontWeight: 500,
          listStyle: "none",
          position: "relative",
          top: "5%",
        }}
      >
        <b>
          {" "}
          <li style={{ position: "relative", right: "13.4rem" }}>Items</li>
        </b>
        <b>
          <li>Price</li>
        </b>
        <b>
          <li>Quantity</li>
        </b>
        <b>
          <li>Total</li>
        </b>
      </ul>

      <YourCartDetails
        src={src}
        title={"Flowerm seed"}
        price={"350.00"}
        quantity={1}
        total={"350.00"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          margin: "0 0 0 12rem",
        }}
      >
        <span style={{ position: "relative", left: "1.89rem" }}>
          <b>Subtotal :</b>{" "}
          <span style={{ position: "relative", left: "23.5rem" }}>
            <b>&#8377;350.00</b>
          </span>
        </span>

        <AbTextfield
          id="outlined-multiline-flexible"
          variant="filled"
          label="Shipping"
          sx={{ position: "relative", left: "10rem", width: "25rem" }}
        />

        <AbTextfield
          id="outlined-multiline-flexible"
          variant="filled"
          label="Address"
          sx={{ position: "relative", left: "10rem", width: "25rem" }}
        />
        <AbTextfield
          id="outlined-multiline-flexible"
          variant="filled"
          label="Coupon code"
          sx={{ position: "relative", left: "3.4rem", width: "12rem" }}
        />
        <span style={{ margin: "1rem 0 0 4.5rem" }}>
          <b>Grand Total :</b>{" "}
          <span style={{ position: "relative", left: "22.4rem" }}>
            <b>&#8377;350.00</b>
          </span>
        </span>
        <Button
          variant="contained"
          sx={{
            borderRadius: "25px",
            width: "12rem",
            textTransform: "none",
            position: "relative",
            top: "2rem",
            left: "27%",
          }}
        >
          Checkout
        </Button>
      </Box>
    </div>
  );
}

export default YourCart;
