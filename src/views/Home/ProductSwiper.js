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
function ProductSwiper() {
  const [products, setProducts] = useState([]);

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




  return (
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
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <SwiperSlide>
             
                  <SingleProduct
                    src={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                    imgUrl={product.imgUrl}
                    key={product._id}
                  />
              </SwiperSlide>
            </Grid>
          ))}
        </Grid>
      </Swiper>
    </SwiperProduct>
  );
}

export default ProductSwiper;
