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
        backgroundColor: "#f8f8f8",
        fontFamily: "Nunito",
      }}
    >
      <div style={{ paddingInline: "73px" }}>
        <div
          style={{
            color: "#618264",
            fontSize: "1.7rem",
            fontWeight: 500,
            padding: "70px 0px 30px 0px"
          }}
        >
          Your Cart
        </div>

        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: 500,
            listStyle: "none",
            padding: "0"
          }}
        >
          <b>
            {""}
            <li>Items</li>
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
        <hr style={{ color: "#DEDEDE", opacity: "20%" }}></hr>


        <YourCartDetails sx={{ paddingLeft: "40px" }}
          src={src}
          title={"Flowerm seed"}
          price={"350.00"}
          quantity={1}
          total={"350.00"}
        />
        <hr style={{ color: "#DEDEDE", opacity: "20%" }}></hr>


        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBlock: "82px",
              gap: "41px"
            }}
          >
            <div style={{ width: "100%" }}>
              <span style={{ display: "flex", justifyContent: "space-between" }}>
                <b>Subtotal :</b>{" "}
                <span>
                  <b>&#8377;350.00</b>
                </span>
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <AbTextfield
                id="outlined-multiline-flexible"
                variant="filled"
                label="Shipping"
                sx={{ width: "25rem" }}
              />

              <AbTextfield
                id="outlined-multiline-flexible"
                variant="filled"
                label="Address"
                sx={{}}
              />
              <AbTextfield
                id="outlined-multiline-flexible"
                variant="filled"
                label="Coupon code"
                sx={{}}
              />
            </div>

            <div style={{ width: "100%" }}>
              <span style={{ display: "flex", justifyContent: "space-between" }}>
                <b>Grand Total :</b>{" "}
                <span style={{}}>
                  <b>&#8377;350.00</b>
                </span>
              </span>
            </div>
            <div style={{ width: "100%", justifyContent: "flex-end", display: "flex" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                  textTransform: "none",
                  padding: "9px 63px"
                }}
              >
                Checkout
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
