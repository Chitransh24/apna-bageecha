import React from "react";
import { Button, ButtonGroup } from "@mui/material";

function YourCartDetails(props) {
  let { src, title, price, quantity, total } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#121212",
      }}
    >
      <div style={{alignItems:"center", display:"flex", gap:"50px"}}>
      <img
        src={src}
        alt=""
        style={{
          width: "7rem",
          height: "7rem",
          borderRadius: "1rem",
          position: "relative",
        }}
      />
      <b style={{}}>
        {" "}
        <span>{title}</span>
      </b>
      </div>
      <b style={{ position: "relative", right: "9%" }}>
        <span>&#8377;{price}</span>
      </b>
      
      <ButtonGroup
        variant="contained"
        size="small"
        aria-label="outlined primary button group"
        sx={{
          fontSize: "12px",
          height: "37px",
          borderRadius: "9px",
          backgroundColor: "#618264",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          textTransform: "none",
          position: "relative",
          right: "4%",
        }}
      >
        <Button style={{ border: "none", borderRadius: "10px",}}>
          &#8722;
        </Button>
        <p>{quantity}</p>
        <Button style={{ width: "30px", borderRadius: "10px" }}>&#43;</Button>
      </ButtonGroup>
      <b style={{ position: "relative" }}>
        <span>&#8377;{total}</span>
      </b>
    </div>
  );
}

export default YourCartDetails;
