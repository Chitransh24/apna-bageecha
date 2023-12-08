import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bgtop from "../../assets/bgtop.png";
import bgbottom from "../../assets/bgbottom.png";
import { BoxStyle, CardMediaStyles } from "./LandingViewStyles";

const LandingView = ({ children }) => {
  return (
    <BoxStyle display="flex">
      <Navbar />

      <BoxStyle flexGrow="1" height="100vh" flex={1}>
        <CardMediaStyles top="0" right="0" image={bgtop} alt="" />
        {children}
        <CardMediaStyles bottom="0" left="0" image={bgbottom} alt="" />
      </BoxStyle>
      <Footer />
    </BoxStyle>
  );
};

export default LandingView;
