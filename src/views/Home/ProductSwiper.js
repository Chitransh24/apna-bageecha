import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import styled from "@emotion/styled";
import SingleProduct from "../Products/SingleProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { SwiperProduct } from "./ProductSwiperStyle";
import AbButton from "../../components/AbButton/AbButton";
import { useNavigate, useNavigation } from "react-router-dom";
import "swiper/css";
import "swiper/css/bundle";
import { hover } from "@testing-library/user-event/dist/hover";
const token = localStorage.getItem("token");

function ProductSwiper() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [display, setDisplay] = useState([]);
  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/product/products", config)
        .then((res) => {
          if (res.data) {
            setProducts(res.data.products);
          }
        });
    };
    apiCall();
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    const apiCall = async () => {
      await axios
        .get("http://localhost:5000/api/user/getWishList", config)
        .then((res) => {
          if (res.data.wishItems) {
            const productsWithWishList = products.map((product) => {
              const isWishListed = res.data.wishItems.some(
                (item) => item.product._id === product._id
              );
              return {
                ...product,
                isWishListed: isWishListed,
              };
            });
            setDisplay(productsWithWishList);
          }
        });
    };
    apiCall();
  }, [products]);

  useEffect(() => {
    if (activeCategory === "Plants") {
      let filtered = display.filter((item) => {
        return item.category[0] === "plants";
      });
      setFilteredData(filtered);
    }
    if (activeCategory === "Fertilizers") {
      let filtered = display.filter((item) => {
        return item.category[0] === "fertilizer";
      });
      setFilteredData(filtered);
    }
    if (activeCategory === "Equipments") {
      let filtered = display.filter((item) => {
        return item.category[0] === "equipment";
      });
      setFilteredData(filtered);
    }
  }, [activeCategory]);

  console.log(filteredData);
  return (
    <>
      <div style={{ paddingInline: "90px" }}>
        <h1 style={{fontSize:"50px"}}>Popular</h1>
        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "space-between",
            marginBlock: "48px 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              height: "70%",
            }}
          >
            <AbButton
              sx={{
                padding: "9px 83px",
                backgroundColor: "#fff",
                border: "2px solid #618264",
                borderRadius: "39px",
                textTransform: "none",
                height: "100%",
                color: "#111",
                "&:hover": {
                  backgroundColor: "#618264",
                  color: "#fff",
                },
                "&:focus": {
                  backgroundColor: "#618264",
                  color: "#fff",
                },
              }}
              text="Plants"
              variant={activeCategory === "Plants" ? "contained" : "outline"}
              color="primary"
              onClick={() => setActiveCategory("Plants")}
              large
            />
            <AbButton
              sx={{
                padding: "9px 83px",
                backgroundColor: "#DBDBDB",
                borderRadius: "39px",
                textTransform: "none",
                height: "100%",
                "&:hover": {
                  backgroundColor: "#618264",
                  color: "#fff",
                },
                "&:focus": {
                  backgroundColor: "#618264",
                  color: "#fff",
                },
                backgroundColor: "#fff",
                border: "2px solid #618264",
              }}
              text="Equipments"
              variant={
                activeCategory === "Equipments" ? "contained" : "outline"
              }
              color="primary"
              onClick={() => setActiveCategory("Equipments")}
              large
            />
            <AbButton
              sx={{
                padding: "9px 83px",
                backgroundColor: "#DBDBDB",
                borderRadius: "39px",
                textTransform: "none",
                height: "100%",
                "&:hover": {
                  backgroundColor: "#618264",
                  color: "#fff",
                },
                "&:focus": {
                  backgroundColor: "#618264",
                  color: "#fff",
                },
                backgroundColor: "#fff",
                border: "2px solid #618264",
              }}
              text="Fertilizers"
              variant={
                activeCategory === "Fertilizers" ? "contained" : "outline"
              }
              color="primary"
              onClick={() => setActiveCategory("Fertilizers")}
              large
            />
          </div>
          <div style={{}}>
            <AbButton
              sx={{
                padding: "9px 83px",
                backgroundColor: "#618264",
                borderRadius: "39px",
                textTransform: "none",
                height: "100%",
              }}
              text="See all"
              variant="contained"
              large
              onClick={() => navigate(`/product`)}
            />
          </div>
        </div>

        <SwiperProduct>
          <Swiper
            scrollbar={{ draggable: true }}
            autoplay={true}
            spaceBetween={10}
            slidesPerView={4}
            // navigation={true}
            // pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Scrollbar, Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            css={{}}
          >
            <Grid container spacing={1}>
              {(filteredData.length > 0 ? filteredData : display).map(
                (product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <SwiperSlide>
                        <SingleProduct
                          src={product.imgUrl}
                          title={product.title}
                          description={product.description}
                          price={product.price}
                          quantity={product.quantity}
                          wish={product.isWishListed}
                          // imgUrl={product.imgUrl}
                          id={product._id}
                        />
                      </SwiperSlide>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Swiper>
        </SwiperProduct>
      </div>
    </>
  );
}

export default ProductSwiper;
