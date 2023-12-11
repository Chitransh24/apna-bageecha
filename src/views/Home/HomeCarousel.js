import React from 'react'
import { Carousel } from "react-responsive-carousel";
import LandingImage1 from "../../assets/LandingImage1.jpeg"
import LandingImage2 from "../../assets/LandingImage2.jpeg"
import LandingImage3 from "../../assets/LandingImage3.jpeg"


function HomeCarousel() {
  return (
        
    <Carousel
      autoPlay={true}
      infiniteLoop
      centerMode={true}
      centerSlidePercentage={100}
      emulateTouch={true}
      interval={2000}
      showThumbs={false}
      useKeyboardArrows={true}
      showArrows={false}
    >
      <div style={{ display: "flex" }}>
        <img 
         style={{height: "50rem", objectFit: "cover"}}
         alt="Carousal" src={LandingImage1}/>

    {/* <p className="legend">Legend 1</p> */}
        
      </div>
      <div>
        <img 
          style={{height: "50rem", objectFit: "cover"}}
          alt=""
          src={LandingImage2}
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div style={{textAlign: "center"}}>
        <img
          style={{height: "50rem", objectFit: "cover", backgroundSize: 'center' }}
          alt=""
          src={LandingImage3}
        />
        {/* <p className="legend" style={{width: "150px", textAlign: 'center'}}>Legend 3</p> */}
      </div>
    </Carousel>

  )
}

export default HomeCarousel;
