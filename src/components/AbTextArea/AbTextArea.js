import React, { useState } from "react";
import { TextField } from "@mui/material";

const AbTextArea = (props) => {
    const { disabled, required, label, name, handleChange, placeholder } = props;
  
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
      <TextField
        sx={{ textAlign: "center" }}
        name={name ? name : " "}
        required={required ? true : false}
        id="outlined-multiline-required"
        label={label ? label : ""}
        multiline
        rows={4} 
        disabled={disabled ? true : false}
        onChange={handleInputChange}
        placeholder={placeholder ? placeholder : ""}
        defaultValue=""
        error={error}
        helperText={helperText}
        InputProps={{
          style: {
            borderRadius: "3.3125rem",
            padding: "0rem 7rem", 
            boxShadow: "1px 4px 14px 0px rgba(0, 0, 0, 0.15)",
            border: "1px solid #618264",
            marginBottom: "0.66rem",
            textAlign: "center",
          },
        }}
        {...props}
      />
    );
  };
  
  export default AbTextArea;