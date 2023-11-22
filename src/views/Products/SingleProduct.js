import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Grid,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SingleProduct(props) {
  console.log(props);
  let { imgUrl, title, description, price, quantity, id, wish } = props;
  const [apiData, setApiData] = useState({});
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
            margin: "7rem 0 0 0rem",
            width: "325px",
            borderRadius: "35px",
            height: "349px",
            backgroundColor: "#e4e4e4",
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia
              sx={{
                height: "170px",
                width: "325px",
                backgroundSize: "cover",
                objectFit: "cover",
                borderTopRightRadius: "35px",
                borderTopLeftRadius: "35px",
              }}
              image={imgUrl}
              alt=""
            />
          </Grid>

          <Box id="productDetail" sx={{ position: "relative" }}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                sx={{
                  color: "#618264",
                  margin: "0.5rem 0 0 1.5rem",
                  fontFamily: "Nunito",
                  fontWeight: 500,
                  fontSize: "1.3rem",
                  //                   width: "220px",
                }}
              >
                {" "}
                {title}
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
                {" "}
                {description}
                Lorem ipsum dolor sit amet consectetur adipisicing Ullam
                consequuntur
              </Typography>
              <Box
                id="buttons"
                sx={{ display: "flex", margin: "0.7rem 0 0 1.5rem" }}
              >
                <Button
                  // TODO - to add payment functionality
                  style={{
                    fontSize: "12px",
                    marginRight: "5px",
                    height: "37px",
                    width: "6rem",
                    //                     width: "100px",
                    borderRadius: "10px",
                    backgroundColor: "#618264",
                    border: "none",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "none",
                    ":hover": { backgroundColor: "#618264" },
                  }}
                  onClick={checkout}
                >
                  Buy &#8377;{finalAmount ? finalAmount : price}
                </Button>

                <ButtonGroup
                  variant="contained"
                  size="small"
                  aria-label="outlined primary button group"
                  sx={{
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
                    color: wish ? "red" : "white",
                    ":hover": { backgroundColor: "#618264" },
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    onClick={() => handleWish(id)}
                  />
                </IconButton>
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
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    onClick={() => handleCart(id)}
                  />
                </IconButton>
                <IconButton
                  id="info"
                  sx={{
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
                    ":hover": { backgroundColor: "#618264" },
                  }}
                >
                  <FontAwesomeIcon
                    icon={faInfo}
                    onClick={() => {
                      alert(id);
                      navigate(`/productDetails/${id}`);
                    }}
                  />
                </IconButton>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SingleProduct;
