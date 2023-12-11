import React, { useEffect, useState } from "react";
import AbInput from "../../components/AbInput/AbInput";
import { useNavigate } from "react-router-dom";
import AbButton from "../../components/AbButton/AbButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Box, FormControl, FormControlLabel } from "@mui/material";
import AbCheckbox from "../../components/AbCheckbox/AbCheckbox";
import ForgetPassword from "../../components/ForgetPassword/ForgetPassword";
import { BoxStyles, H1Styles } from "./LoginStyles";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    return setOpen(false);
  };
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("userInfo"));
    console.log(isAuth);
    if (isAuth && isAuth !== null) {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      const notify = () => {
        toast.error("All Details are mandatory", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      notify();
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        config
      );
      const notify = () => {
        toast.success("Login Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      notify();
      // setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("token", data.token);
      setLoading(false);
      navigate("/product");
    } catch (error) {
      const notify = () => {
        toast.error("Error Occures", {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
      notify();
      setLoading(false);
    }
  };

  return (
    <BoxStyles
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      margin="11% 0%"
    >
      <H1Styles>Log in</H1Styles>
      <FormControl sx={{ gap: "8px", width: "519px" }}>
        <AbInput
          placeholder="Email or mobile number"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          inputProps={{ style: { textAlign: "center" } }}
        />
        <AbInput
          type="password"
          placeholder="Password"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          inputProps={{ style: { textAlign: "center" } }}
        />
        <BoxStyles justifyContent="space-between">
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
            onClick={handleOpen}
            variant="text"
            text="forget password?"
            sx={{ fontSize: "1rem", textTransform: "none" }}
          />
          <ForgetPassword open={open} handleClose={handleClose} />
        </BoxStyles>
        <AbButton
          type="contained"
          onClick={submitHandler}
          text="Sign in"
          large={true}
        />
      </FormControl>
      <ToastContainer />
    </BoxStyles>
  );
};
export default Login;
