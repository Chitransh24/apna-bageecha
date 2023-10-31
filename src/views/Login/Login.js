import React from "react";
import AbInput from "../../components/AbInput/AbInput";

const Login = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <AbInput placeholder="Email or mobile number" required={true} />
    </div>
  );
};

export default Login;
