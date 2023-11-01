import { TextField } from "@mui/material";
import React from "react";
import { StyledTextField } from "./AbInputStyle";

const AbInput = (props) => {
  const { type, disabled, required, label, name, handleChange, placeholder } =
    props;
  return (
    // <TextField

    // />
    <StyledTextField
      // shadow={}
      sx={{textAlign:"center"}}
      name={name ? name : " "}
      required={required ? true : false}
      id="outlined-required"
      label={label ? label : ""}
      type={type === "password" ? "password" : "text"}
      disabled={disabled ? true : false}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : ""}
      defaultValue=""
      //   sx={{ padding: "3rem", borderRadius: "100%" }}
      InputProps={{
        style: {
            borderRadius: "3.3125rem",
          padding: "0rem 7rem",
          boxShadow: "1px 4px 14px 0px rgba(0, 0, 0, 0.15)",
        border:"1px solid #618264",
        marginBottom:"0.66rem",
        textAlign:"center",
          //   margin:"0px auto"
        },
      }}
      {...props}
    />
  );
};

export default AbInput;
