import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LandungImage from "../../assets/LandingImage2.jpeg";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import AbButton from "../../components/AbButton/AbButton";
import { Favorite } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductDetails() {
  let [product, setProduct] = useState()
  let wish = true

  const { id } = useParams();
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const apiCall = async () => {
      await axios
        .post(`http://localhost:5000/api/product/getProduct/${id}`, config)
        .then((res) => {
          console.log("Salaar", res)
          if (res.data) {
            setProduct(res.data.product);
          }
        });
    };
    apiCall();
  }, []);


  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#618264",
        padding: "30px 70px",
        display: "flex",
        fontFamily: "Nunito",
      }}
    >
      <div style={{ width: "30%" }}>
        <img
          style={{ height: "38rem", width: "100%", borderRadius: "4rem" }}
          src={LandungImage}
          alt="productImage"
        />
      </div>
      <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            height: "10%",
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            margin: "3rem 0 1rem 4rem",
            fontFamily: "Nunito",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          <p>
            <p style={{ fontSize: "1rem", marginTop: "38px" }}>Seed</p>
            <p>
              Plant Seed

                <IconButton
                  // onClick={() => handleWish(id)}
                  variant="contained"
                  id="heart"
                  sx={{
                    height: "37px",
                    width: "40px",
                    borderRadius: "10px",
                    backgroundColor: "#618264",
                    fontSize: "16px",
                    color: "white",
                    ":hover": { backgroundColor: "#618264" },
                  }}
                >
                  {wish ? <Favorite /> : <FavoriteBorderIcon />}
                </IconButton>
           
            </p>
          </p>
          <p>
            <p>&#8377; 350.00</p>
            <ButtonGroup
              variant="contained"
              size="small"
              aria-label="outlined primary button group"
              sx={{
                fontSize: "1rem",
                height: "37px",
                borderRadius: "9px",
                backgroundColor: "#ffffff",
                color: "#628164",
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
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  color: "#618264",
                  fontSize: "1rem",
                }}
              >
                &#8722;
              </Button>
              <p>{1}</p>
              <Button
                style={{
                  width: "30px",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  color: "#618264",
                  fontSize: "1rem",
                }}
              >
                &#43;
              </Button>
            </ButtonGroup>
          </p>
        </div>

        <div
          style={{ width: "40%", margin: "4rem 0 1rem 4rem", color: "#fff" , height: "13%"}}
        >
          <hr style={{ width: "60rem" }} />
          <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div
          style={{
            width: "40%",
            margin: "4rem 0 1rem 4rem",
            color: "#fff",
            display: "flex",
            fontFamily: "Nunito",
            fontWeight: 700,
          }}
        >
          <AbButton
            text="ADD TO CART"
            style={{
              backgroundColor: "#fff",
              height: "2.7rem",
              color: "#618264",
              marginRight: "10px",
              paddingInline: "60px",
            }}
          />
          <AbButton
            text="SAVE  TO WHISHLIST"
            style={{
              backgroundColor: "#fff",
              height: "2.7rem",
              color: "#618264",
              paddingInline: "35px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
