import React from 'react'
import WhyChoose1 from "../../assets/1-removebg-preview.png";
import WhyChoose2 from "../../assets/2-removebg-preview.png";
import WhyChoose3 from "../../assets/vecteezy_plant-root-icon-design-template_7634376-removebg-preview (2).png"

function WhyToChoose() {
  return (
    <div style={{paddingBlock:"60px", backgroundColor:"rgb(208, 231, 210)"}}>
    <h1 style={{display:"flex", justifyContent:"center", fontWeight:"1000", fontSize:"40px"}}>Why to Choose Us?</h1>
    <div style={{display:"flex", alignItems:"center", padding:" 60px 90px", justifyContent:"space-between"}}>
    <div style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
      {/* <img src={WhyChoose1} style={{width:"140px"}}></img> */}
      <p style={{fontSize:"25px", fontWeight:"1000", textAlign:"center"}}>🌼Expertly Curated Selection</p>
      <p style={{fontSize:"17px", fontWeight:"600", textAlign:"center"}}>Our collection features a carefully curated selection<br/> of premium plants and gardening essentials,<br/> ensuring top-notch quality.</p>
    </div>
    <div style={{height:"132px",width:"1px",background:"gray"}}></div>
    <div style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
      {/* <img src={WhyChoose2} style={{width:"240px"}}></img> */}
      <p style={{fontSize:"25px", fontWeight:"1000", textAlign:"center"}}>🚚 Fast and Reliable Delivery</p>
      <p style={{fontSize:"17px", fontWeight:"600", textAlign:"center"}}>Reliable delivery ensures a speedy start to<br/> transforming your space, so you can<br/> enjoy your garden sooner.</p>
    </div>
    <div style={{height:"132px",width:"1px",background:"gray"}}></div>
    <div  style={{display:"flex", justifyItems:"center", flexDirection:"column", alignItems:"center"}}>
    {/* <img src={WhyChoose3} style={{width:"140px"}}></img> */}
      <p style={{fontSize:"25px", fontWeight:"1000", textAlign:"center"}}>💬 Dedicated Customer Support</p>
      <p style={{fontSize:"17px", fontWeight:"600", textAlign:"center"}}>Here for you with friendly support, offering<br/> expert advice and solutions for a <br/>seamless gardening experience</p>
    </div>
    </div> 
    </div>
  )
}

export default WhyToChoose
