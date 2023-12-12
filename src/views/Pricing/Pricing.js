import React from "react";
import Subscription from "./Subscription";
import { BoxStyles, H1Styles } from "./PricingStyles";
import { Typography } from "@mui/material";

function Pricing() {
  let services1 = [
    "Basic Kitchen Garden Setup Consultation",
    "Access to a curated list of suggested crops",
    "Recommendations for watering devices.",
    "Comprehensive kitchen garden setup consultation",
    "Customized crop selection based on user preferences and regional climate",
    "Provision of watering devices (e.g., drip irrigation system or garden hose).",
    "Extensive kitchen garden setup consultation with in-person assistance (if available).",
    "Personalized crop selection tailored to individual preferences and the local environment.",
    "High-quality watering devices and tools are included.",
  ];

  return (
    <>
      <BoxStyles height="100vh" textAlign>
        <BoxStyles padding="76px">
          <H1Styles>Our Pricing Plan</H1Styles>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.kv
          </Typography>
        </BoxStyles>
        <BoxStyles display="flex" justifyContent="center" alignItems="center">
          <Subscription
            title={"Basic"}
            color={"#618264"}
            backgroundColor={"#f2f2f2"}
            services1={services1}
          />
          <Subscription
            title={"Premium"}
            color={"#f2f2f2"}
            backgroundColor={"#618264"}
            services1={services1}
          />
          <Subscription
            title={"Delux"}
            color={"#618264"}
            backgroundColor={"#f2f2f2"}
            services1={services1}
          />
        </BoxStyles>
      </BoxStyles>
    </>
  );
}

export default Pricing;
