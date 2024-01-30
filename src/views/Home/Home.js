import React from "react";
import HomeCarousel from "./HomeCarousel";
import ProductSwiper from "./ProductSwiper";
import banner1 from "../../assets/banner 1.jpg";
import LandingImage from "../../components/LandingImage/LandingImage";
import LandingImage1 from "../../assets/Seeds.jpg";
import LandingImage2 from "../../assets/Gardening Tools.jpg";
import LandingImage3 from "../../assets/Soil and Fertizers.jpg";
import LandingImage4 from "../../assets/pexels-cottonbro-studio-4503273.jpg";
import NewArrivals from "./NewArrivals";
import { BoxStyle, ButtonStyles, MainBoxStyles } from "./HomeStyles";
// import Video1 from "../../assets/Video.mp4";
// import Video from "../../components/VideoSection/Video";
import bgtop from "../../assets/bgtop.png";
import bgbottom from "../../assets/bgbottom.png";
import "./Home.css";
import WhyToChoose from "./WhyToChoose";
import { Box } from "@mui/system";
const Home = () => {
  return (
    <MainBoxStyles style={{ minHeight: "100vh", width: "100vw" }}>
      <HomeCarousel src={banner1} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          width: "100%",
          alignItems: "center",
          height: "11rem",
          background: "#D0E7D2",
        }}
      >
        <div
          style={{
            fontWeight: "1000",
            textAlign: "left",
            fontSize: "30px",
            color: "#797878",
          }}
        >
          Fresh Arrivals Await You!
          <br />
          Unearth the Latest Additions to Your Garden.
        </div>
        <div
          style={{
            background: "#315534",
            padding: "17px 87px",
            borderRadius: "8px",
            color: "white",
            fontSize: "20px",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          View All Offers
        </div>
      </div>
      <BoxStyle
        className="bgImage"
        flexFlow
        flexDirection="column"
        height="100%"
        width="100%"
        flexWrap="wrap"
      >
        <BoxStyle padding="90px 400px 23px 400px">
          <h1>Shop By Collection</h1>
        </BoxStyle>

        <BoxStyle
          display="flex"
          padding="60px 90px"
          gap="20px"
          // padding="60px 90px 60px 125px"
        >
          <LandingImage src={LandingImage1} desc="Gardening Tools" />
          <LandingImage src={LandingImage2} desc="Fertilizers" />
          <LandingImage src={LandingImage3} desc="Plant Support" />
          <LandingImage src={LandingImage4} desc="Seeds" />
        </BoxStyle>
        <Box>
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
        </Box>
      </BoxStyle>

      <ProductSwiper />
      <NewArrivals />
      <WhyToChoose />
    </MainBoxStyles>
  );
};

export default Home;
