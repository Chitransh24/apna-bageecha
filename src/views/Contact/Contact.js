import { Button, FormControl, Input, TextareaAutosize } from "@mui/material";
import React, { useState, useEffect } from "react";
import AbInput from "../../components/AbInput/AbInput";
import AbButton from "../../components/AbButton/AbButton";
import LandingImage1 from "../../assets/LandingImage1.jpeg"

function Contact() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  useEffect(function sideEffect() {
    console.log("Form side effect")
  }, [])

  return (
    <>
    <div style={{display:"flex",  fontFamily: "Nunito"}}>
    <div style={{width:"45%"}}>
      <img src={LandingImage1} alt="ConTactImage" style={{width:"100%", height:"100%"}}></img>
    </div>
    <div
      style={{
        backgroundColor: "#f0f0f0",
        flexDirection: "column",
        padding:"40px 90px 60px 90px",
        width: "65%"
      }}>

      <h1 style={{ fontFamily: "Nunito", fontWeight: "1000", letterSpacing:"2px"}}>GET IN TOUCH</h1>
      <p style={{paddingBottom:"50px"}}>24/7 We will answer your questions and problems </p>
      <FormControl sx={{display:"flex", gap:"27px"}}>
        <div style={{ display: "flex", gap:"20px"}}>
          <input
            id="firstname"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{
              borderRadius: "25px",
              backgroundColor: "#e3e3e3",
              border: "none",
              padding: "20px",
              width: "50%"
            }}
          />
          <input
            id="lastname"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{
              borderRadius: "25px",
              backgroundColor: "#e3e3e3",
              padding: "20px",
              width: "50%",
              border: "none"
            }}
          />
        </div>
        <input
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={{
            borderRadius: "25px",
            backgroundColor: "#e3e3e3",
            padding: "20px",
            border: "none"
          }}
        />
        <input
          id="phonenumber"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={{
            borderRadius: "25px",
            backgroundColor: "#e3e3e3",
            padding: "20px",
            border: "none"
          }}
        />

        <textarea
          id="description"
          name="description"
          placeholder="Describe your issue"
          value={formData.decription}
          onChange={handleInputChange}
          cols="70"
          rows="10"
          style={{
            borderRadius: "25px",
            backgroundColor: "#e3e3e3",
            padding: "20px",
            border: "none",
            resize:"none",
            fontFamily: "Nunito"
          }}
        ></textarea>
        <AbButton type="contained" text="SEND" large={true}/>
      </FormControl>
    </div>
    </div>
    </>
  );
}

export default Contact;
