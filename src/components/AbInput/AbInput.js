import { TextField } from "@mui/material";
import React from "react";

const AbInput = (props) => {
  const { type, disabled, required, label, name, handleChange, placeholder } =
    props;
  return (
    <TextField
      name={name ? name : " "}
      required={required ? true : false}
      id="outlined-required"
      label={label ? label : ""}
      type={type === "password" ? "password" : "text"}
      disabled={disabled ? true : false}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : ""}
      defaultValue=""
      sx={{ padding: "3rem", borderRadius:"100%" }}
      {...props}
    />
  );
};

export default AbInput;
