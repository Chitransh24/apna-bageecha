import { FormControl } from "@mui/material";
import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; 
import AbInput from "../../components/AbInput/AbInput";
import AbButton from "../../components/AbButton/AbButton";
import AbUpload from "../../components/AbUpload/AbUpload";
import axios from "axios";

function AddProduct({setOpen}) {
  const [productData, setProductData] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
    if (e.target.name === "image") {
      if (e.target.files && e.target.files[0]) {
        setFile(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const validateInputs = () => {
    let errors = {};
    if (!productData.title) {
      errors.title = "Title is required";
    }
    if (!productData.description) {
      errors.description = "Description is required";
    }
    if (!productData.price) {
      errors.price = "Price is required";
    }
    if (isNaN(productData.price)) {
      errors.price = "Price should be a number";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitHandler =async () => {
    if (validateInputs()) {
        try{
          
        }
        catch{

        }
    }
  };

  const CenteredButtonContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: "20px",
    marginBottom: "20px",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "10%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ fontFamily: "Nunito" }}>Add Products</h1>
        <CloseIcon style={{ cursor: "pointer", alignItems:'end'}} onClick={()=>
        {
            setOpen(false)
            setFile()
        }}/> 
      </div>
      <FormControl>
        <CenteredButtonContainer>
          {file ? (
            <div>
              <img src={file} width={"200px"} />
            </div>
          ) : (
            <AbUpload handleChange={handleChange} />
          )}
        </CenteredButtonContainer>
        <AbInput
          onChange={(e) => handleChange(e)}
          name="title"
          error={!!validationErrors.title}
          helperText={validationErrors.title}
          placeholder="Product Title"
          required={true}
        />

        <AbInput
          onChange={(e) => handleChange(e)}
          name="description"
          placeholder="Product Description"
          error={!!validationErrors.description}
          helperText={validationErrors.description}
        />

        <AbInput
          onChange={(e) => handleChange(e)}
          name="price"
          placeholder="Price"
          error={!!validationErrors.price}
          helperText={validationErrors.price}
        />

        <AbInput
          onChange={(e) => handleChange(e)}
          name="quantity"
          placeholder="Quantity"
        />

        <AbButton
          type="contained"
          onClick={submitHandler}
          text="Add Product"
          large={true}
        />
      </FormControl>
    </div>
  );
}

export default AddProduct;
