import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#618264",
        display: "flex",
        justifyContent:"space-around",
        color:"#FFFFFF",
        
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" ,marginBlock:"20px", width:"24%"}}>
        <h1 style={{fontWeight:"700"}}>Apna Bageecha</h1>
        <h4>
          Address #1: Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </h4>
        <h4>
          Address #2: Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </h4>
      </div>
      <div style={{ display: "flex", flexDirection: "column" ,alignItems:"center",marginBlock:"20px", textAlign:"center" }}>
        <h2>Quick Links</h2>
        <ul style={{ listStyleType: "none" }}>
          <li style={{margin:"10px 40px 0px 0px"}}>Terms & Condition</li>
          <li style={{margin:"10px 40px 0px 0px"}}>Refund Policies</li>
          <li style={{margin:"10px 40px 0px 0px"}}>Privacy Policies</li>
          <li style={{margin:"10px 40px 0px 0px"}}>Contact Us</li>
          <li style={{margin:"10px 40px 0px 0px"}}>Blog</li>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "column" ,marginBlock:"20px"}}>
        <h2>Working Hours</h2>
        <p style={{lineHeight:"1px"}}>Mon to Sat: 9 am to 6 pm</p>
        <p style={{lineHeight:"1px"}}>Sun: Holiday (Office Only)</p>
        <p style={{lineHeight:"1px"}}>Phone: XXXXX XXXXX</p>
        <p style={{lineHeight:"1px"}}>Email: loremipsum@mail.com</p>
      </div>
      </div>
  );
};

export default Footer;
