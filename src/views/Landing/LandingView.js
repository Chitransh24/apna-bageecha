import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bgtop from "../../assets/bgtop.png";
import bgbottom from "../../assets/bgbottom.png";

const LandingView = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: " column", minHeight: "100vh", overflowX:"clip" }}
    >
      <Navbar />

      <div style={{flexGrow:"1"}}>
        <img
          style={{ position: "fixed", top: "0", right: "0", zIndex: "-999" }}
          src={bgtop}
          alt=""
        />
        <img
          style={{ position: "fixed", left: "0", bottom: "0", zIndex: "-999" }}
          src={bgbottom}
          alt=""
        />
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default LandingView;
