import React, { useState } from "react";
import AbInput from "../../components/AbInput/AbInput";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Button, FormControl, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router";
import AbButton from "../../components/AbButton/AbButton";
import AbCheckbox from "../../components/AbCheckbox/AbCheckbox";
import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [validationErrors, setValidationErrors] = useState({});
  const [remember, setRemember] = useState(false);

  const validateInputs = () => {
    let errors = {};
    if (!name || !email || !password) {
      errors.All = "All fields are required!";
    }
    if (!name) {
      errors.name = "Name is required!";
    }
    if (
      password &&
      !password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{4,})"
      )
    ) {
      errors.password = "Provide a valid password";
    }
    if (
      email &&
      !email.match(/^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,16})+\s*$/)
    ) {
      errors.email = "Provide a valid email";
    }
    if (password !== confirmpassword) {
      errors.cpassword = "Passwords doesnt match";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const submitHandler = async () => {
    // setPicLoading(true);

    if (validateInputs()) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:5000/api/user",
          {
            name,
            email,
            password,
          },
          config
        );
        console.log(data);
        const notify = () => {
          toast.success("Registration Successful", {
            position: toast.POSITION.TOP_RIGHT,
          });
        };
        notify();
        localStorage.setItem("userInfo", JSON.stringify(data));
        // setPicLoading(false);
        navigate("/login");
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        // setPicLoading(false);
      }
    }
  };
  const apiCall = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        maxWidth: "100vw",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "10%",
      }}
    >
      <h1 style={{ fontFamily: "Nunito" }}>Log in</h1>
      <FormControl>
        <AbInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={!!validationErrors.email}
          helperText={validationErrors.email}
          placeholder="Email or mobile number"
          required={true}
        />

        <AbInput
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          error={!!validationErrors.name}
          helperText={validationErrors.name}
        />

        <AbInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required={true}
          error={!!validationErrors.password}
          helperText={validationErrors.password}
        />

        <AbInput
          onChange={(e) => {
            setConfirmpassword(e.target.value);
          }}
          placeholder="Confirm Password"
          required={true}
          error={!!validationErrors.cpassword}
          helperText={validationErrors.cpassword}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControlLabel
            onClick={() => {
              setRemember(!true);
            }}
            sx={{ margin: "0.5rem " }}
            control={<AbCheckbox />}
            label={
              <Box component="div" sx={{ color: "#618264" }}>
                remember me
              </Box>
            }
          />
          <AbButton
            variant="text"
            text="forget password?"
            sx={{ fontSize: "1rem", textTransform: "none" }}
          />
        </div>

        <AbButton
          type="contained"
          onClick={submitHandler}
          text="Sign in"
          large={true}
        />
      </FormControl>
      <ToastContainer />
    </div>
  );
};

export default Signup;
