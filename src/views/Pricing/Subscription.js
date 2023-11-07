import React from "react";
import {  CheckCircle, CheckCircleOutline } from '@mui/icons-material';
import { Button } from "@mui/material";


function Subscription(props) {
    let {services1, title, color, backgroundColor } = props;
    console.log(color);
  return (
    <div
      style={{
        height: "27.5rem",
        width: "21rem",
        marginRight: "1.4rem",
        borderRadius: "2rem",
        backgroundColor: `${backgroundColor}`,
        color:  `${color}`,
        boxShadow: "3px 3px 12px 0px rgba(0, 0, 0, 0.20)",
      }}
    >
      <div style={{display: "inline"}}>
        <h1
          style={{
            position: "relative",
            left: "7.5%",
            top: "9%",
            fontSize: "1.7rem",
  
            textAlign: "left"
          }}
        >
          {title}
        </h1>
        <p style={{position: 'relative', right: "28%", top: "3%"}}>Most Popular</p>
      </div>
      <div
        style={{
          height: "3rem",
          width: "5.5rem",
          backgroundColor: "#618264",
          borderRadius: "0.9rem",
          color: `${backgroundColor}`,
          position: "relative",
          bottom: "13%",
          left: "68%",
        }}
      >
        <h4 style={{ position: "relative", top: ".5rem" }}>&#8377;550.00</h4>
        <p style={{ position: "relative", bottom: "1rem", fontSize: "0.7rem" }}>
          per month
        </p>
      </div>
      <div style={{display: "inline-block", justifyContent: "center", alignItems: 'center', float: "left", textAlign: "left", fontSize: "0.7rem", position: "relative", left: "7%", bottom: "12.5%", width: "16rem", color: `${color}`}}>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircle style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[0]} <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircle style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[1]}  <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircle style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[2]} <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircleOutline style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[3]}  <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircleOutline style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[4]} <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircleOutline style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[5]} <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircleOutline style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[6]}  <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircleOutline style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[7]}  <br /></span>
       <span style={{textAlign: "center", width: "6rem"}}><CheckCircleOutline style={{ position: "relative", top:"0.2rem", fontSize: "1.1rem", }}/> {services1[8]} <br /></span>
       
      </div>
      <Button style={{height: "2rem", width: "6rem", borderRadius: "20px", backgroundColor: `${color}`, color: `${backgroundColor}`, fontSize: ".65rem", position: "relative", bottom: "3.4rem"}}>Get Started</Button>
    </div>
  );
}

export default Subscription;
