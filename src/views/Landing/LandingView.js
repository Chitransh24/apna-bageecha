import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


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
      <Navbar/>

      {/* <div style={{flexGrow:"1", height:"100vh", flex: 1}}>
     
      </div> */}
          {children}
      <Footer />
    </div>
  );
};

export default LandingView;
