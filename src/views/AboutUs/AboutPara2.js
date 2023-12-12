import React from "react";
import LandingImage from "../../components/LandingImage/LandingImage";
import { BoxStyles, H1Styles, PStyles } from "./AboutPara2Styles";

function AboutPara2({ src }) {
  return (
    <BoxStyles color="#676767" display="flex">
      <BoxStyles width="76%" margin="40px 0px 60px 100px">
        <H1Styles>Why to Choose Us ?</H1Styles>
        <PStyles>
          We at Apna Bageecha are more than just a service; we're your committed
          collaborator in designing a flourishing, exquisite garden. Come along
          for the ride as we go green and let's develop together.
          <br /> <br />
          Expert Advice: Throughout your gardening adventure, our knowledgeable
          experts is at your side. Regardless of your level of experience, we
          offer the knowledge and assistance you require to ensure the success
          of your garden. <br /> <br /> Exquisite Plant Selection: We provide
          your garden with only the healthiest, best-quality seeds and plants.
          We're dedicated to giving you premium options because we know that a
          successful garden begins with a solid foundation. <br /> <br />
          Stress-Free Garden Maintenance: Give us responsibility for your
          garden's upkeep so you can unwind and savour the results of your hard
          work. We handle the routine maintenance so you have more time to enjoy
          the beauty of your garden. Monthly Surprises: Get free growth
          enhancers and fertilisers to support the success of your garden.
          Because we think it's important to give back to our devoted gardeners,
          we offer monthly surprises that will improve the productivity and
          health of your garden.
        </PStyles>
      </BoxStyles>
      <BoxStyles margin="10rem 5rem 0 5rem">
        <LandingImage src={src} />
      </BoxStyles>
    </BoxStyles>
  );
}

export default AboutPara2;
