import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import CartItems from "./CartItems";

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
        .get("http://localhost:5000/api/product/getCart", config)
        .then((res) => {
          if (res.data.cartItems) {
            setCartItem(res.data.cartItems);
          }
        });
    };
    apiCall();
  }, []);
  return (
    <div
      style={{
        transition: "all 500ms ease-in-out",
        maxHeight: "500px",
        width: "100%",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: open ? "30%" : 0,
        borderRadius: "40px",
        backgroundColor: "white",
        position: "fixed",
        top: "50%",
        left: "50%",
        overflowY: "auto",
        overflowX: "hidden",
        transform: "translate(-50%, -50%)",
        zIndex: 20,
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        <div style={{ justifyContent: "start" }}>Cart</div>
        <div
          style={{
            cursor: "pointer",
            width: "2rem",
            height: "2rem",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            fontSize: "1.5rem",
          }}
          onClick={toggleCart}
        >
          <CloseIcon />
        </div>
      </div>
      <div>
        {cartItem.map((product) => (
          <CartItems item={product} />
        ))}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#618264",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "35px",
              width: "33%",
            }}
            // onClick={handleCheckout}
          >
            <div>Total:</div>
            <div>$ </div>
          </button>
          <button
            style={{
              backgroundColor: "#618264",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "35px",
              marginLeft: "0.5rem",
              width: "60%",
              height: "50px",
            }}
            // onClick={handleCheckout}
          >
            CHEKCOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
