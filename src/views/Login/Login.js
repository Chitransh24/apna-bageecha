import React, { useEffect, useState } from "react";
import AbInput from "../../components/AbInput/AbInput";
import { useNavigate } from "react-router-dom";
import AbButton from "../../components/AbButton/AbButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Box, FormControl, FormControlLabel } from "@mui/material";
import AbCheckbox from "../../components/AbCheckbox/AbCheckbox";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = JSON.parse(localStorage.getItem("userInfo"));
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
      setLoading(false);
      navigate("/chats");
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "10%",
      }}
    >
      <h1 style={{ fontFamily: "Nunito" }}>Log in</h1>
      <FormControl>
        <AbInput placeholder="Email or mobile number" required={true} onChange = {(e)=>{setEmail(e.target.value)}} />
        <AbInput placeholder="Password" required={true} onChange = {(e)=>{setPassword(e.target.value)}} />
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

export default Login;
