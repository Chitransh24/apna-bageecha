import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";
import "swiper/css";
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import styled from "@emotion/styled";
import SingleProduct from "../Products/SingleProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { SwiperProduct } from "./ProductSwiperStyle";
import AbButton from "../../components/AbButton/AbButton";
import { useNavigate, useNavigation } from "react-router-dom";
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

console.log(filteredData)
  return (
    <>
    <h1>Popular in Gardening Products</h1>
       <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
         
          <div>
            <AbButton
              text="Plants"
              variant={activeCategory === "Plants" ? "contained" : "outline"}
              color="primary"
              onClick={() => setActiveCategory("Plants")}
              large
            />
            <AbButton
              text="Equipments"
              variant={
                activeCategory === "Equipments" ? "contained" : "outline"
              }
              color="primary"
              onClick={() => setActiveCategory("Equipments")}
              large
            />
            <AbButton
              text="Fertilizers"
              variant={
                activeCategory === "Fertilizers" ? "contained" : "outline"
              }
              color="primary"
              onClick={() => setActiveCategory("Fertilizers")}
              large
            />
          </div>
          <div style={{ marginRight: "5rem" }}>
           <AbButton
           text="See all"
           variant="contained"
           large
           onClick={() => navigate(`/product`)}
           />
           
          </div>
        </div>
    <SwiperProduct>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        // pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        css={{}}
      >
      
        <Grid container spacing={1}>
        {(filteredData.length > 0 ? filteredData : display)
            .map((product) => {
              return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <SwiperSlide>
             
                  <SingleProduct
                    src={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                    wish={product.isWishListed}
                    imgUrl={product.imgUrl}
                    key={product._id}
                  />
              </SwiperSlide>
            </Grid>
              );
              })}
        </Grid>
      </Swiper>
    </SwiperProduct>
    </>
  );
}

export default ProductSwiper;
