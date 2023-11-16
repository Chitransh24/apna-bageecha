import React, { useState } from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SingleProduct(props) {
  let { imgUrl, title, description, price, quantity, key } = props;
  const [apiData, setApiData] = useState({});
  const navigate = useNavigate();
  console.log(quantity);
  const [finalAmount, setFinalAmount] = useState(price);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const token = JSON.parse(localStorage.getItem(["userinfo"]?.token));
  // console.log(token);
  const config = {
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    // mode: "cors",
  };
  const decrement = () => {
    if (itemQuantity <= 1) {
      setItemQuantity(1);
      setFinalAmount(price);
    } else if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      setFinalAmount(finalAmount - price);
    }
  };
  const increment = () => {
    setItemQuantity(itemQuantity + 1);
    setFinalAmount(finalAmount + price);
  };
  const checkout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/checkout",
        {
          items: [
            {
              id: 1,
              quantity: itemQuantity,
              price: finalAmount,
              name: title,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // You can add other Axios configuration options here if needed
        }
      );

      // Access response data using response.data
      console.log(response.data);
      window.location = response.data.url;
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div
      style={{
        margin: "7rem 0 0 0rem",
        width: "325px",
        borderRadius: "35px",
        height: "349px",
        backgroundColor: "#e4e4e4",
      }}
    >
      <img
        style={{
          height: "170px",
          width: "325px",
          backgroundSize: "cover",
          objectFit: "cover",
          borderTopRightRadius: "35px",
          borderTopLeftRadius: "35px",
        }}
        src={imgUrl}
        src={imgUrl}
        alt=""
      />
      <div id="productDetail" style={{ position: "relative" }}>
        <h3 style={{ color: "#618264", margin: "0.5rem 0 0 1.5rem" }}>
          {" "}
          {title}
        </h3>

        <p
          style={{
            fontSize: "12px",
            textAlign: "left",
            height: "70px",
            margin: "0.5rem 0 0 1.5rem",
            width: "220px",
          }}
        >
          {" "}
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing Ullam consequuntur
        </p>
        <div
          id="buttons"
          style={{ display: "flex", margin: "0.7rem 0 0 1.5rem" }}
        >
          <Button
            // TODO - to add payment functionality
            style={{
              fontSize: "12px",
              marginRight: "5px",
              height: "37px",
              width: "100px",
              borderRadius: "10px",
              backgroundColor: "#618264",
              border: "none",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "none",
            }}
            onClick={checkout}
          >
            Buy &#8377;{finalAmount ? finalAmount : price}
          </Button>
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="outlined primary button group"
            style={{
              fontSize: "12px",
              height: "37px",
              borderRadius: "9px",
              backgroundColor: "#618264",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              textTransform: "none",
            }}
          >
            <Button
              style={{ border: "none", borderRadius: "10px" }}
              onClick={decrement}
            >
              &#8722;
            </Button>
            <p>{itemQuantity ? itemQuantity : quantity}</p>
            <Button
              style={{ width: "30px", borderRadius: "10px" }}
              onClick={increment}
            >
              &#43;
            </Button>
          </ButtonGroup>
          <IconButton
            id="heart"
            style={{
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
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </IconButton>
          <IconButton
            id="info"
            style={{
              height: "37px",
              width: "40px",
              marginLeft: "10px",
              position: "relative",
              bottom: "7rem",
              borderRadius: "10px",
              backgroundColor: "#618264",
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faInfo} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
