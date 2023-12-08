import React from "react";
import HomeCarousel from "./HomeCarousel";
import ProductSwiper from "./ProductSwiper";
import banner1 from "../../assets/banner 1.jpg"
import LandingImage from "../../components/LandingImage/LandingImage";
import LandingImage1 from "../../assets/LandingImage1.jpeg";
import LandingImage2 from "../../assets/LandingImage2.jpeg";
import LandingImage3 from "../../assets/LandingImage3.jpeg";
import { Button } from "@mui/material";
import NewArrivals from "./NewArrivals";
import { BoxStyle, ButtonStyles, MainBoxStyles } from "./HomeStyles";
// import Video1 from "../../assets/Video.mp4";
// import Video from "../../components/VideoSection/Video";

const Home = () => {
  return (
    <MainBoxStyles style={{ minHeight: "100vh", width: "100vw" }}>
       <HomeCarousel src={banner1} />
      <BoxStyle flexDirection="column" height="100%" width="100%">
        <BoxStyle padding="40px 400px">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            harum.
          </h1>
        </BoxStyle>
        <BoxStyle padding="60px 90px 60px 125px">
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
        </BoxStyle>

        <div>
          <ButtonStyles>
            More
            <BoxStyle
              backgroundColor="#ffffffe6"
              height="32px"
              width="32px"
              borderRadius="50px"
              fontWeight="100"
              position="relative"
              left="20%"
            ></BoxStyle>
          </ButtonStyles>
        </div>
      </BoxStyle>
      <NewArrivals />
      <ProductSwiper />
    </MainBoxStyles>
  );
};

export default Home;
