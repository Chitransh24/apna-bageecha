import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ButtonGroup, IconButton } from "@mui/material";
import { Button } from "@mui/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItems({ item }) {
  const decrement = () => {};
  const increment = () => {};
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #ccc",
        width: "auto",
        fontFamily: "Arial, sans-serif",
        color: "#666",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Link
        >
          <img
            src={item.product.imgUrl}
           alt="img"
            style={{ width: "150px", height: "200px" }}
          />
        </Link>
        <ToastContainer />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.5rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontSize: "0.875rem",
                textTransform: "uppercase",
                fontWeight: "600",
                maxWidth: "240px",
                justifyContent: "start",
                color: "#666",
                textDecoration: "none",
                hover: { textDecoration: "underline" },
              }}
            >
              {item.product.title}
            </div>
            <div
              style={{
                fontSize: "1.009",
                // paddingTop:'1rem',
                color: "#e53e3e",
                fontWeight: "600",
              }}
            >
              ${parseFloat(item.product.price).toFixed(2)}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              fontSize: "0.875rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <div style={{ fontWeight: "600" }}>Qty.</div>
              <ButtonGroup
                variant="contained"
                size="small"
                aria-label="primary button group"
                sx={{
                  fontSize: "12px",
                  height: "37px",
                  borderRadius: "15px",
                  backgroundColor: "#618264",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  textTransform: "none",
                }}
              >
                <Button
                  style={{
                    border: "none",
                    backgroundColor: "#618264",
                    color: "white",
                    minWidth: "30px",
                  }}
                  onClick={decrement}
                >
                  &#8722;
                </Button>
                <p
                  style={{
                    margin: "0",
                    padding: "0 6px",
                    color: "white",
                    flex: "1",
                  }}
                >
                  {item.quantity}
                </p>
                <Button
                  style={{
                    border: "none",
                    backgroundColor: "#618264",
                    color: "white",
                    minWidth: "30px",
                  }}
                  onClick={increment}
                >
                  &#43;
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <IconButton
          variant="contained"
          id="heart"
          sx={{
            height: "37px",
            width: "40px",
            marginLeft: "8px",
            borderRadius: "10px",
            backgroundColor: "#618264",
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            ":hover": { backgroundColor: "#618264" },
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>
      </div>
    </div>
  );
}

export default CartItems;
