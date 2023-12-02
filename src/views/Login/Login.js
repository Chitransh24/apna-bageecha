import React, { useEffect, useState } from "react";
import AbInput from "../../components/AbInput/AbInput";
import { useNavigate } from "react-router-dom";
import AbButton from "../../components/AbButton/AbButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
} from "@mui/material";
import AbCheckbox from "../../components/AbCheckbox/AbCheckbox";
import ForgetPassword from "../../components/ForgetPassword/ForgetPassword";

const Login = () => {
  const [passwordReset, setPasswordReset] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { return setOpen(false) };
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
  // const [oldPassword, setOldpassword] = useState();
  // const [newPassword, setNewpassword] = useState();
  // const [confirmNewPassword, setConfirmNewpassword] = useState();
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

  let handleInputChange = (event) => {
    setPasswordReset((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const style = {
    width: "30%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: "3px 3px 12px 0px rgba(0, 0, 0, 0.10);",
    padding: "7rem 6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    border: "0px solid",
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
        <AbInput
          placeholder="Email or mobile number"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <AbInput
          type="password"
          placeholder="Password"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
            onClick={handleOpen}
            variant="text"
            text="forget password?"
            sx={{ fontSize: "1rem", textTransform: "none" }}
          />
           <ForgetPassword open={open} handleClose={handleClose}/>
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
