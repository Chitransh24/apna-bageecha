import { Button, FormControl, Input, TextareaAutosize } from "@mui/material";
import React, { useState, useEffect } from "react";
import AbInput from "../../components/AbInput/AbInput";
import AbButton from "../../components/AbButton/AbButton";
import LandingImage1 from "../../assets/LandingImage1.jpeg";
import {
  BoxStyles,
  CardMediaStyles,
  H1Styles,
  InputStyles,
  PStyles,
  TextareaStyles,
} from "./ContactStyles";

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
    console.log("Form side effect");
  }, []);

  return (
    <>
      <BoxStyles display="flex">
        <BoxStyles width="45%">
          <CardMediaStyles
            image={LandingImage1}
            alt="ConTactImage"
          ></CardMediaStyles>
        </BoxStyles>
        <BoxStyles
          backgroundColor="#f0f0f0"
          flexDirection="column"
          padding="40px 90px 60px 90px"
          width="65%"
        >
          <H1Styles>GET IN TOUCH</H1Styles>
          <PStyles>24/7 We will answer your questions and problems </PStyles>
          <FormControl sx={{ display: "flex", gap: "27px" }}>
            <BoxStyles display="flex" gap="20px">
              <InputStyles
                id="firstname"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                width="50%"
              />
              <InputStyles
                id="lastname"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                width="50%"
              />
            </BoxStyles>
            <InputStyles
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputStyles
              id="phonenumber"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />

            <TextareaStyles
              id="description"
              name="description"
              placeholder="Describe your issue"
              value={formData.decription}
              onChange={handleInputChange}
              cols="70"
              rows="10"
            ></TextareaStyles>
            <AbButton type="contained" text="SEND" large={true} />
          </FormControl>
        </BoxStyles>
      </BoxStyles>
    </>
  );
}

export default Contact;
