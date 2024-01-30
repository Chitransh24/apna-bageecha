import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import SingleProduct from "../Products/SingleProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { AbButtonStyles, BoxStyles, SwiperProduct } from "./ProductSwiperStyle";
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
      <BoxStyles paddingInline="90px">
        <h1>Popular in Gardening Products</h1>
        <BoxStyles display="flex" gap="3rem" marginBlock="48px 8px">
          <BoxStyles display="flex" alignItems="center" gap="16px" height="70%">
            <AbButtonStyles
              backgroundColor="fff"
              text="Plants"
              variant={activeCategory === "Plants" ? "contained" : "outline"}
              color="primary"
              onClick={() => setActiveCategory("Plants")}
              large
            />
            <AbButtonStyles
              backgroundColor="fff"
              text="Equipments"
              variant={
                activeCategory === "Equipments" ? "contained" : "outline"
              }
              color="primary"
              onClick={() => setActiveCategory("Equipments")}
              large
            />
            <AbButtonStyles
              backgroundColor="fff"
              text="Fertilizers"
              variant={
                activeCategory === "Fertilizers" ? "contained" : "outline"
              }
              color="primary"
              onClick={() => setActiveCategory("Fertilizers")}
              large
            />
          </BoxStyles>
          <div style={{}}>
            <AbButtonStyles
              text="See all"
              variant="contained"
              large
              onClick={() => navigate(`/product`)}
            />
          </div>
        </BoxStyles>

        <SwiperProduct>
          <Swiper
            scrollbar={{ draggable: true }}
            autoplay={true}
            spaceBetween={10}
            slidesPerView={4}
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
      </BoxStyles>
    </>
  );
}

export default ProductSwiper;
