import { Button, FormControl, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AbInput from "../AbInput/AbInput";
import { BoxStyles, ButtonStyles, H2Styles } from "./ForgetPasswordStyles";

function ForgetPassword({ open, handleClose }) {
  const [passwordReset, setPasswordReset] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  let handleInputChange = (event) => {
    setPasswordReset((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyles borderRadius position top left transform bgcolor boxShadow>
        <BoxStyles padding="5rem 9rem" borderRadius="29px">
          <Box>
            <H2Styles>Forget Password ?</H2Styles>
          </Box>
          <FormControl>
            <AbInput
              name="oldPassword"
              value={passwordReset.oldPassword}
              placeholder="Enter old password"
              required={true}
              onChange={handleInputChange}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <AbInput
              name="newPassword"
              value={passwordReset.newPassword}
              placeholder="Enter new password"
              required={true}
              onChange={handleInputChange}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <AbInput
              name="confirmNewPassword"
              value={passwordReset.confirmNewPassword}
              placeholder="Confirm new password"
              required={true}
              onChange={handleInputChange}
              inputProps={{ style: { textAlign: "center" } }}
            />
            <ButtonStyles variant="contained">Confirm</ButtonStyles>
          </FormControl>
        </BoxStyles>
      </BoxStyles>
    </Modal>
  );
}

export default ForgetPassword;
