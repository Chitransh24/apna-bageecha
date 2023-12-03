import React from "react";
import HomeCarousel from "./HomeCarousel";
import ProductSwiper from "./ProductSwiper";

import LandingImage from "../../components/LandingImage/LandingImage";
import LandingImage1 from "../../assets/LandingImage1.jpeg";
import LandingImage2 from "../../assets/LandingImage2.jpeg";
import LandingImage3 from "../../assets/LandingImage3.jpeg";
import { Button } from "@mui/material";
// import Video1 from "../../assets/Video.mp4";
// import Video from "../../components/VideoSection/Video";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100vw" }}>
      <HomeCarousel />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
          <div style={{padding: "40px 400px"}} >
            <h1>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum.</h1>
          
          </div>
          <div style={{display: "flex", padding:"60px 90px"}} >
        <LandingImage
          src={LandingImage1}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
        <LandingImage
          src={LandingImage2}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
        <LandingImage
          src={LandingImage3}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
        <LandingImage
          src={LandingImage2}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque"
        />
       </div>

       <div>
        <Button
          style={{
            fontSize: "12px",
            padding:"8px 21px 8px 43px",
            width:"100%",
            borderRadius: "25px",
            backgroundColor: "#618264",
            border: "none",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          More
          <div
            style={{
              backgroundColor: "#ffffffe6",
              height: "32px",
              width: "32px",
              borderRadius: "50px",
              color: "black",
              fontWeight: "100",
              position: "relative",
              left: "20%",
            }}
          ></div>
        </Button>
        </div>
      </div>

      <ProductSwiper/> 
    </div>
  );
};

export default Home;
