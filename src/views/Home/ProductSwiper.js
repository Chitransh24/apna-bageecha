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

  const swiper = useSwiperSlide();

      // Styled container for the entire carousel
      const SwiperProduct = styled.div`
        width: 85rem;
        height: 8+0vh; 
        margin: auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #fff;
      `;
    const SwiperProduct = styled.div`
    width: 85rem;
    margin: auto;
    height: 5rem;
    padding: 20px;
    border-radius: 10px;
  `;
  const StyledArrowButton = styled.div`
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `;

  // Styled slide content
  const SwiperSingleProduct = styled.div`
    /* text-align: center;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  `;

      

//   return (
//     <SwiperProduct>
//     <Swiper
//     spaceBetween={10}
//     slidesPerView={4}
//     navigation={true}
//     // pagination={{ clickable: true }}
//     scrollbar={{ draggable: true }}
//     modules={[Pagination, Navigation]}
//     onSlideChange={() => console.log('slide change')}
//     onSwiper={(swiper) => console.log(swiper)}
//     css={{  }}
//   >

// <Grid container spacing={1}>
//          {products.map((product) => (
//           <Grid  item xs={12} sm={6} md={4} lg={3}>
//        <SwiperSlide>  
//          <SingleProduct
//             src={product.image}
//             title={product.title}
//             description={product.description}
//             price={product.price}
//             quantity={product.quantity}
//             imgUrl={product.imgUrl}
//             key={product._id}
//           />
//           </SwiperSlide>  
//           </Grid>
//         ))} 
//   // Styled container for the entire carousel

  return (
    <SwiperProduct>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        css={{}}
      >
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <SwiperSlide>
                <SwiperSingleProduct>
                  <SingleProduct
                    src={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                    imgUrl={product.imgUrl}
                    key={product._id}
                  />
                </SwiperSingleProduct>
              </SwiperSlide>
            </Grid>
          ))}
        </Grid>
      </Swiper>
    </SwiperProduct>
  );
}

export default ProductSwiper;
