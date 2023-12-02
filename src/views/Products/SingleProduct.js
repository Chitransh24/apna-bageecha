import React, { useEffect, useState } from "react";
import {
  IconButton,
  Grid,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import { useNavigate, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Favorite from "@mui/icons-material/Favorite";

function SingleProduct(props) {
  // console.log(props);
  const { src, title, description, price, quantity, id, wish } = props;
  const navigate = useNavigate();
  const [finalAmount, setFinalAmount] = useState(price);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const token = localStorage.getItem("token");

  const decrement = () => {
    if (itemQuantity <= 1) {
      setItemQuantity(1);
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

  const handleWish = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/user/addToWishList/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data.newUser) {
        const notify = () => {
          toast.success("Product Addedd Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        };
        notify();
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const handleCart = async (id) => {
    alert(id);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/user/addToCart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      if (response.data.newUser) {
        const notify = () => {
          toast.success("Product Addedd Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        };
        notify();
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <Grid container spacing={1}>
      <ToastContainer />
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          sx={{
            width: "24rem",
            margin: "0 0 1rem",
            borderRadius: "35px",
            height: "22rem",
            backgroundColor: "#e4e4e4",
            cursor: "pointer",
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia
              sx={{
                height: "14.375rem",
                width: "24rem",
                backgroundSize: "cover",
                objectFit: "cover",
                borderTopRightRadius: "35px",
                borderTopLeftRadius: "35px",
              }}
              onClick={() => navigate(`/productDetails/${id}`)}
              image={src}
              alt=""
            />
          </Grid>

          <Box id="productDetail" sx={{ position: "relative" }}>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ display: "flex" }}>
                <div>
                  <Typography
                    sx={{
                      color: "#618264",
                      margin: "0.5rem 0 0 1.5rem",
                      fontFamily: "Nunito",
                      fontWeight: 500,
                      fontSize: "1.3rem",
                      width: "220px",
                    }}
                  >
                    {title ? title : "Title here"}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      textAlign: "left",
                      height: "70px",
                      margin: "0.5rem 0 0 1.5rem",
                      width: "220px",
                    }}
                  >
                    {description
                      ? description
                      : "Lorem ipsum dolor sit amet consectetur adipisicing Ullam consequuntur"}
                  </Typography>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "4.5rem" }}>
                  <IconButton
                    onClick={() => handleWish(id)}
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
                    { wish ?  <Favorite/> : <FavoriteBorderIcon/>}
              
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SingleProduct;
