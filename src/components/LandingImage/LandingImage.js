import { Grid } from "@mui/material";
import React from "react";

const App = ({ src, desc }) => {
  return (
    <div style={{textAlign: "center", 
    }} >
      <img
        style={{
          borderRadius: "5.5rem",
          height: "450px",
          width: "320px",
        }}
        src={src}
        alt="landingimage1"
      />
      <span style={{display: "block", width: "auto", margin:"auto", paddingTop:"14px"}}>{desc}</span>
    </div>
  );
};

export default App;
