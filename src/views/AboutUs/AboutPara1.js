import React from "react";
import { BoxStyles, H1Styles, PStyles } from "./AboutPara1Styles";

function AboutPara1({ src }) {
  return (
    <BoxStyles display="flex">
      <BoxStyles width="76%" margin="40px 0px 60px 100px">
        <H1Styles>Your Ideal Kitchen Garden Companion Is Here!</H1Styles>
        <PStyles>
          Are you ready to transform your home into a flourishing green haven?
          At Apna Bageecha, we're wholeheartedly committed to helping you turn
          your dream of a thriving kitchen garden into reality. With our expert
          services and personalised plans, you can experience the joy of
          savouring the freshest, homegrown produce right from your own
          backyard.
          <br />
          <br />
          We have a passionate and knowledgeable team of gardeners who are here
          to help you at every stage. We're here to support you every step of
          the way, from helping you choose the ideal plants and seeds to
          offering knowledgeable guidance on pest management, soil preparation,
          and sustainable gardening techniques.
          <br />
          <br />
          With Apna Bageecha, you'll discover the immense satisfaction of
          nurturing your own garden and harvesting nature's bounty at home. Get
          started on your green adventure today and let us be your ideal kitchen
          garden companion!"
        </PStyles>
      </BoxStyles>
      <BoxStyles width="24%" margin="51px" display="flex">
        <img style={{}} src={src} alt="" />
      </BoxStyles>
    </BoxStyles>
  );
}

export default AboutPara1;
