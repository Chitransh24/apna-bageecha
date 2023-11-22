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
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          flexWrap: "wrap",
          marginLeft: "6rem",
        }}
      >
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

        <Button
          style={{
            fontSize: "12px",
            height: "41px",
            width: "140px",
            borderRadius: "25px",
            backgroundColor: "#618264",
            border: "none",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "35%",
            right: "42%",
          }}
        >
          <p style={{ marginLeft: "20px", textTransform: "none" }}>More</p>
          <div
            style={{
              backgroundColor: "#ffffffe6",
              height: "32px",
              width: "32px",
              borderRadius: "50px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "100",
              position: "relative",
              left: "20%",
            }}
          ></div>
        </Button>
      </div>
      <ProductSwiper />
    </div>
  );
};

export default Home;
