import React from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";

function App({ src, ProductName }) {
  return (
    <div
      style={{
        margin: "7rem 0 0 36rem",
        width: "325px",
        borderRadius: "35px",
        height: "349px",
        backgroundColor: "#e4e4e4",
      }}
    >
      <img
        style={{
          height: "170px",
          width: "325px",
          backgroundSize: "cover",
          objectFit: "cover",
          borderTopRightRadius: "35px",
          borderTopLeftRadius: "35px",
        }}
        src={src}
        alt=""
      />
      <div id="productDetail" style={{ position: "relative" }}>
        <h3 style={{ color: "#618264", margin: "0.5rem 0 0 1.5rem" }}>
          {" "}
          {ProductName}
        </h3>

        <p
          style={{
            fontSize: "12px",
            textAlign: "left",
            margin: "0.5rem 0 0 1.5rem",
            width: "220px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing Ullam consequuntur
          saepe at amet consectetur adipisicing elit Lorem ipsum dolor sit amet.
        </p>
        <div
          id="buttons"
          style={{ display: "flex", margin: "0.7rem 0 0 1.5rem" }}
        >
          <Button
            style={{
              fontSize: "12px",
                marginRight: "5px",
              height: "37px",
              width: "100px",
              borderRadius: "10px",
              backgroundColor: "#618264",
              border: "none",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            Buy &#8377;350.00
          </Button>
            <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group" style={{
              fontSize: "12px",
              height: "37px",
             borderRadius: "9px",
              backgroundColor: "#618264",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              textTransform: "none",}}>
            <Button style={{border: "none", borderRadius: "10px"}}> &#43; </Button>
                  <p>1</p>
            <Button style={{ width: "30px", borderRadius: "10px"}}> &#8722; </Button>
            </ButtonGroup>
          <IconButton
            id="heart"
            style={{
              height: "37px",
              width: "40px",
              marginLeft: "8px",
              borderRadius: "10px",
              backgroundColor: "#618264",
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </IconButton>
          <IconButton 
            id="info"
            style={{
              height: "37px",
              width: "40px",
              marginLeft: "10px",
              position: "relative",
              bottom: "7rem",
              borderRadius: "10px",
              backgroundColor: "#618264",
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faInfo} />
          </IconButton>
         
          </div>
      </div>
    </div>
  );
}

export default App;
