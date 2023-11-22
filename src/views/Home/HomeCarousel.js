import React from 'react'
import { Carousel } from "react-responsive-carousel";
import LandingImage from "../../assets/LandingImage1.jpeg"

function HomeCarousel() {
  return (
        
    <Carousel
      autoPlay={true}
      infiniteLoop
      centerMode={true}
      centerSlidePercentage={100}
      emulateTouch={true}
      interval={3000}
      showThumbs={false}
      useKeyboardArrows={true}
      showArrows={false}
    >
      <div style={{ display: "flex" }}>
        <img 
         style={{height: "35rem"}}
         alt="Carousal" src={LandingImage}/>
    {/* <p className="legend">Legend 1</p> */}
        
      </div>
      <div>
        <img 
          style={{height: "35rem"}}
          alt=""
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div style={{textAlign: "center"}}>
        <img
          style={{height: "35rem"}}
          alt=""
          src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-summer-mountain-sunrise-and-sunset-scenery-clouds-natural-scenery-natural-scenery-image_789792.jpg"
        />
        <p className="legend" style={{width: "150px", textAlign: 'center'}}>Legend 3</p>
      </div>
    </Carousel>

  )
}

export default HomeCarousel;
