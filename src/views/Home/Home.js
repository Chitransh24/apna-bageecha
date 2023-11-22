import React from "react";
import HomeCarousel from "./HomeCarousel";
import ProductSwiper from "./ProductSwiper";



const Home = () => {
  return (
    <div style={{minHeight: "100vh",  width: "100vw"}}>
    <HomeCarousel/>
     <ProductSwiper/>
     </div>
  );
};

export default Home;
