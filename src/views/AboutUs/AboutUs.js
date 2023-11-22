import React from 'react'
import Heading from "./Heading";
import AboutPara1 from "./AboutPara1";
import AboutPara2 from "./AboutPara2";
import AboutImage1 from "../../assets/AboutImage1.png"
import Video from "../../components/VideoSection/Video"
import Video1 from "..//..//assets/Video.mp4"
import LandingImage2 from "../../assets/LandingImage1.jpeg"

function AboutUs() {
  return (
    <div  style={{ minHeight: "100vh",  width: "100vw", backgroundColor: "#f1f1f1" }}>
      <Heading/>
      <AboutPara1 src={AboutImage1} />
      <Video src={Video1} />
      <AboutPara2 src={LandingImage2} />
a    </div>
  )
}

export default AboutUs
