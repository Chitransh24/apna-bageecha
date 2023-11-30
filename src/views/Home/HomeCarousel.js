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
      interval={2000}
      showThumbs={false}
      useKeyboardArrows={true}
      showArrows={false}
    >
      <div style={{ display: "flex" }}>
        <img 
         style={{height: "35rem", objectFit: "cover"}}
         alt="Carousal" src={LandingImage}/>

    {/* <p className="legend">Legend 1</p> */}
        
      </div>
      <div>
        <img 
          style={{height: "35rem", objectFit: "cover"}}
          alt=""
          src="https://imgs.search.brave.com/OISyPorU8hQALbUnRjqpNcqrEzV8OV9os39bw_oNisM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9iZWF1dGlmdWwt/bmF0dXJlLW1vdW50/YWluLXNjZW5lcnkt/d2l0aC1mbG93ZXJz/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div style={{textAlign: "center"}}>
        <img
          style={{height: "35rem", objectFit: "cover", backgroundSize: 'center' }}
          alt=""
          src="https://imgs.search.brave.com/OISyPorU8hQALbUnRjqpNcqrEzV8OV9os39bw_oNisM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9iZWF1dGlmdWwt/bmF0dXJlLW1vdW50/YWluLXNjZW5lcnkt/d2l0aC1mbG93ZXJz/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA"
        />
        <p className="legend" style={{width: "150px", textAlign: 'center'}}>Legend 3</p>
      </div>
    </Carousel>

  )
}

export default HomeCarousel;
