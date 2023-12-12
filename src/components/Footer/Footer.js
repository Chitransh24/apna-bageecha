import React from "react";
import { BoxStyle, LiStyles, Pstyles, TypographyStyles } from "./FooterStyle";

const Footer = () => {
  return (
    <BoxStyle justifyContent="space-around">
      <BoxStyle flexDirection="column" marginBlock="20px" width="24%">
        <h1 style={{ fontWeight: "700" }}>Apna Bageecha</h1>
        <h4>
          Address #1: Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </h4>
        <h4>
          Address #2: Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </h4>
      </BoxStyle>
      <BoxStyle
        flexDirection="column"
        alignItems="center"
        marginBlock="20px"
        justifyContent="space-around"
      >
        <h2>Quick Links</h2>
        <ul style={{ listStyleType: "none" }}>
          <LiStyles>Terms & Condition</LiStyles>
          <LiStyles>Refund Policies</LiStyles>
          <LiStyles>Privacy Policies</LiStyles>
          <LiStyles>Contact Us</LiStyles>
          <LiStyles>Blog</LiStyles>
        </ul>
      </BoxStyle>
      <BoxStyle flexDirection="column" marginBlock="20px">
        <h2>Working Hours</h2>
        <Pstyles>Mon to Sat: 9 am to 6 pm</Pstyles>
        <Pstyles>Sun: Holiday (Office Only)</Pstyles>
        <Pstyles>Phone: XXXXX XXXXX</Pstyles>
        <Pstyles>Email: loremipsum@mail.com</Pstyles>
      </BoxStyle>
    </BoxStyle>
  );
};

export default Footer;
