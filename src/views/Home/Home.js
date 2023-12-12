import React from "react";
import HomeCarousel from "./HomeCarousel";
import ProductSwiper from "./ProductSwiper";
import banner1 from "../../assets/banner 1.jpg"
import LandingImage from "../../components/LandingImage/LandingImage";
import LandingImage1 from "../../assets/Seeds.jpg";
import LandingImage2 from "../../assets/Gardening Tools.jpg";
import LandingImage3 from "../../assets/Soil and Fertizers.jpg";
import LandingImage4 from "../../assets/pexels-cottonbro-studio-4503273.jpg";
import WhyChoose1 from "../../assets/1-removebg-preview.png";
import WhyChoose2 from "../../assets/2-removebg-preview.png";
import WhyChoose3 from "../../assets/vecteezy_plant-root-icon-design-template_7634376-removebg-preview (2).png"
import { Button } from "@mui/material";
// import Video1 from "../../assets/Video.mp4";
// import Video from "../../components/VideoSection/Video";
import bgtop from "../../assets/bgtop.png";
import bgbottom from "../../assets/bgbottom.png";
import "./Home.css"
const Home = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100vw" }}>
      <HomeCarousel src={banner1} />
      <div
      className="bgImage"
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
          <div style={{padding: "90px 400px 23px 400px"}} >
            <div><h1 style={{fontSize: "40px",color: "rgb(97, 130, 100)"}}>Shop By Collection</h1></div>
          
          </div>
          <div style={{display: "flex", padding:"60px 90px", gap:"20px"}} >
        <LandingImage
          src={LandingImage1}
          desc="Seeds"
        />
        <LandingImage
          src={LandingImage2}
          desc="Gardening Tools"
        />
        <LandingImage
          src={LandingImage3}
          desc="Fertilizers"
        />
        <LandingImage
          src={LandingImage4}
          desc="Plant Support"
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

      <div style={{marginTop:"120px", backgroundColor:"#CDCDCD", height:"1px"}}></div> 
      <ProductSwiper/>
      <div>
        <h1 style={{display:"flex", justifyContent:"center", fontWeight:"1000", fontSize:"40px", color:"#618264"}}>Why to Choose Us?</h1>
        <div style={{display:"flex", alignItems:"center", padding:" 60px 90px", justifyContent:"space-between"}}>
        <div style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
          <img src={WhyChoose1} style={{width:"140px"}}></img>
          <p style={{fontSize:"30px", fontWeight:"600", textAlign:"center"}}>Assurance of Quality,<br/>Green Excellence</p>
        </div>
        <div style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
          <img src={WhyChoose2} style={{width:"240px"}}></img>
          <p style={{fontSize:"30px", fontWeight:"600", textAlign:"center", paddingTop:"22px"}}>Expertise in Farming<br/> Essentials</p>
        </div>
        <div  style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
        <img src={WhyChoose3} style={{width:"140px"}}></img>
          <p style={{fontSize:"30px", fontWeight:"600", textAlign:"center", paddingBottom:"22px", marginTop:"8"}}>Your Agri-Companion,<br/> Always</p>
        </div>
        </div> 
        </div>
    </div>
  );
};

export default Home;
