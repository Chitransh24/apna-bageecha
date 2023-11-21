import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bgtop from "../../assets/bgtop.png";
import bgbottom from "../../assets/bgbottom.png";

const LandingView = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " column",
        minHeight: "100vh",
        overflowX: "clip",
        position: "relative",
      }}
    >
      <Navbar />

      <div style={{ flexGrow: "1", height: "100vh" }}>
        <img
          style={{ position: "fixed", top: "0", right: "0", zIndex: "-999" }}
          src={bgtop}
          alt=""
        />
        {children}
        <img
          style={{ position: "fixed", left: "0", bottom: "0", zIndex: "-999" }}
          src={bgbottom}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default LandingView;
