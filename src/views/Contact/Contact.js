import { Button, FormControl, Input, TextareaAutosize } from "@mui/material";
import React, { useState, useEffect } from "react";
import AbInput from "../../components/AbInput/AbInput";
import AbButton from "../../components/AbButton/AbButton";

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

  useEffect(function sideEffect(){
    console.log("Form side effect")
  }, [])
                          
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>

      <h1 style={{ fontFamily: "Nunito", fontWeight: 700 }}>GET IN TOUCH</h1>
      <p>24/7 We will answer your questions and problems </p>
      <FormControl>
        <div style={{ display: "flex" }}>
          <input
            id="firstname"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{
              width: "18.5rem",
              height: '3rem',
              color: "black",
              marginRight: "10px",
              borderRadius: "25px",
              backgroundColor: "#e3e3e3",
              border: "1px solid black",
              textAlign: "center",
              marginBottom: "10px"
            }}
          />
          <input
            id="lastname"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{
              width: "13rem",
              height: "3rem",
              color: "black",
              marginRight: "10px",
              borderRadius: "25px",
              backgroundColor: "#e3e3e3",
              border: "1px solid black",
              textAlign: "center",
              marginBottom: "10px"
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
          // width: "18.5rem",
          height: '3rem',
          color: "black",
          marginRight: "10px",
          borderRadius: "25px",
          backgroundColor: "#e3e3e3",
          border: "1px solid black",
          textAlign: "center",
          marginBottom: "10px"
        }}
        />
        <input
          id="phonenumber"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={{        
            // width: "18.5rem",
            height: '3rem',
            color: "black",
            marginRight: "10px",
            borderRadius: "25px",
            backgroundColor: "#e3e3e3",
            border: "1px solid black",
            textAlign: "center",
            marginBottom: "10px"
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
            borderRadius: "3rem",
            backgroundColor: "#e3e3e3",
            textAlign: "center",
            fontFamily: "Nunito",
            // border: "none",
            color: "black",
            marginBottom: "5%",
          }}
        ></textarea>
        <AbButton type="contained" text="Sign in" large={true}>
          Submit
        </AbButton>
      </FormControl>
    </div>
  );
}

export default Contact;
