import React from "react";

function AboutPara1({ src }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "197.731px",
          height: "429px",
          margin: "2rem 0 0 4.5rem",
        }}
        src={src}
        alt=""
      />
      <p style={{ margin: "2rem 0 0  6rem", color: "#676767" }}>
        Are you ready to transform your home into a flourishing green haven? At
        Apna Bageecha, we're wholeheartedly committed to helping you turn your
        dream of a thriving kitchen garden into reality. With our expert
        services and personalised plans, you can experience the joy of savouring
        the freshest, homegrown produce right from your own backyard. <br/> <br /> We have a
        passionate and knowledgeable team of gardeners who are here to help you
        at every stage. We're here to support you every step of the way, from
        helping you choose the ideal plants and seeds to offering knowledgeable
        guidance on pest management, soil preparation, and sustainable gardening
        techniques. <br/> <br/> With Apna Bageecha, you'll discover the immense satisfaction
        of nurturing your own garden and harvesting nature's bounty at home. Get
        started on your green adventure today and let us be your ideal kitchen
        garden companion!" 
      </p>
    </div>
  );
}

export default AboutPara1;
