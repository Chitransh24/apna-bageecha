import React from "react";

function AboutPara1({ src }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{width:"76%",margin:"40px 0px 60px 100px"}}>
        <h1 style={{fontSize:"40px", color:"#618264", fontWeight:"400"}}>Your Ideal Kitchen Garden Companion Is Here!</h1>
        <p style={{color: "#676767", fontSize:"22px", fontWeight:"400"}}>
        Are you ready to transform your home into a flourishing green haven? At Apna Bageecha, we're wholeheartedly committed to helping you turn your dream of a thriving kitchen garden into reality. With our expert services and personalised plans, you can experience the joy of savouring the freshest, homegrown produce right from your own backyard.
        <br/><br/>We have a passionate and knowledgeable team of gardeners who are here to help you at every stage. We're here to support you every step of the way, from helping you choose the ideal plants and seeds to offering knowledgeable guidance on pest management, soil preparation, and sustainable gardening techniques.
        <br/><br/>With Apna Bageecha, you'll discover the immense satisfaction of nurturing your own garden and harvesting nature's bounty at home. Get started on your green adventure today and let us be your ideal kitchen garden companion!"
      </p>
      </div>
      <div style={{width:"24%", margin:"51px", display:"flex", justifyContent:"center"}}>
      <img
        style={{
        }}
        src={src}
        alt=""
      />
      </div>
    </div>
  );
}

export default AboutPara1;
