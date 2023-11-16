import React from "react";
import Subscription from "./Subscription";

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
    <div style={{ height: "100vh", textAlign: "center" }}>
      <h1 style={{ marginTop: "7rem", color: "#618264" }}>Our Pricing Plan</h1>
      <p style={{ position: "relative", bottom: "2.7%" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.kv
      </p>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Subscription title={"Basic"} color={"#618264"} backgroundColor={"#f2f2f2"} services1={services1}/>
      <Subscription title={"Premium"} color={"#f2f2f2"} backgroundColor={"#618264"} services1={services1}/>
      <Subscription title={"Delux"} color={"#618264"} backgroundColor={"#f2f2f2"} services1={services1}/>
      </div>
    </div>
  );
}

export default Pricing;
