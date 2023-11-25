import { TextField } from "@mui/material";
import React from "react";

function AbTextfield(props) {
    const { variant, large, label } = props;
  return (
    <TextField
      sx={{
      width:large ? "25rem" :"",

    }}
      label={label ? label : ""}
      variant={variant ? variant : "filled"}
      {...props}
    />
  );
}

export default AbTextfield;
