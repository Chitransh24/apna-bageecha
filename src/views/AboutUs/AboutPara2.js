import React from "react";
import LandingImage from "../../components/LandingImage/LandingImage"

function AboutPara2({src}) {
  return (
    <div
      style={{
        color: "#676767",
        display: "flex",
      }}
    >
      <div style={{width:"76%",margin:"40px 0px 60px 100px"}}>
        <h1 style={{ color: "#618264", fontSize: "4.5rem", }}>
          Why to Choose Us ?
        </h1>
        <p style={{color: "#676767", fontSize:"22px", fontWeight:"400"}}>
          We at Apna Bageecha are more than just a service; we're your committed
          collaborator in designing a flourishing, exquisite garden. Come along
          for the ride as we go green and let's develop together.
          <br /> <br />
          Expert Advice: Throughout your gardening adventure, our knowledgeable
          experts is at your side. Regardless of your level of experience, we
          offer the knowledge and assistance you require to ensure the success
          of your garden. <br /> <br /> Exquisite Plant Selection: We provide your garden with
          only the healthiest, best-quality seeds and plants. We're dedicated to
          giving you premium options because we know that a successful garden
          begins with a solid foundation. <br /> <br />Stress-Free Garden Maintenance: Give
          us responsibility for your garden's upkeep so you can unwind and
          savour the results of your hard work. We handle the routine
          maintenance so you have more time to enjoy the beauty of your garden.
          Monthly Surprises: Get free growth enhancers and fertilisers to
          support the success of your garden. Because we think it's important to
          give back to our devoted gardeners, we offer monthly surprises that
          will improve the productivity and health of your garden.
        </p>
      </div>
      <div style={{margin:"10rem 5rem 0 5rem"}}>
      <LandingImage src={src}/>
      </div>
    </div>
  );
}

export default AboutPara2;
