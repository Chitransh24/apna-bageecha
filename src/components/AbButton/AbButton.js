import { Button } from "@mui/material";
import React from "react";

const AbButton = (props) => {
  const { text, variant, onClick, color, large } = props;
  return (
    <Button
    onClick={onClick}
      sx={{
        borderRadius: "26px",
        textTransform: "none",
        backgroundColor: color? color :"",
        height:large ? "3.5rem" :"",

        fontFamily: "Nunito"
      }}
      variant={variant ? variant : "contained"}
      {...props}
    >                 
      {text ? text : "Click Me"}
    </Button>
  );
};

export default AbButton;
