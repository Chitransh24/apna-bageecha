import React from "react";
import Heading from "./Heading";
import AboutPara1 from "./AboutPara1";
import AboutPara2 from "./AboutPara2";
import image from "./plant.png"
import LandingImage2 from "../../assets/LandingImage1.jpeg"
function About() {
  return (
    <div style={{ minHeight: "100vh",  width: "100vw", backgroundColor: "#f1f1f1" }}>
    <Heading/>
    <AboutPara1 src={image}/>
    <AboutPara2 src={LandingImage2}/>
    </div>
  );
}
                          
export default About;
                    