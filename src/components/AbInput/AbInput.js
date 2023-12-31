import { TextField } from "@mui/material";
import React, { useState } from "react";
import { StyledTextField } from "./AbInputStyle";


const AbInput = (props) => {
  const {
    type,
    disabled,
    required,
    label,
    name,
    handleChange,
    placeholder,
    search,
  } = props;

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const validateInputs = (value) => {
    if (required && !value) {
      setError(true);
      setHelperText("This Field is Required");
    }
  };
  const handleInputChange = (e) => {
    const { value } = e.target;
    validateInputs(value);
    handleChange(e);
  };
  
  return (
    // <TextField

    // />
    <StyledTextField
      // shadow={}
      sx={{ textAlign: "left",}}
      name={name ? name : " "}
      required={required ? true : false}
      id="outlined-required"
      label={label ? label : ""}
      type={type === "password" ? "password" : "text"}
      disabled={disabled ? true : false}
      onChange={handleInputChange}
      placeholder={placeholder ? placeholder : ""}
      defaultValue=""
      error={error}
      helperText={helperText}
      //   sx={{ padding: "3rem", borderRadius: "100%" }}
      InputProps={{
        shrink: true,
        style: {
          height:search ? "2.9rem" : "100%",
          borderRadius: "3.3125rem",
          padding: "0rem 7rem",
          marginBottom: "0.66rem",
          textAlign: "left",
          background: search ? "#DBDBDB" : "",
          //   margin:"0px auto"
        },
      }}
      {...props}
    />
  );
};

export default AbInput;
