import { Button, FormControl, Modal } from '@mui/material'
import { Box, style } from '@mui/system'
import React, { useState } from 'react'
import AbInput from '../AbInput/AbInput'

function ForgetPassword({open, handleClose}) {
      const [passwordReset, setPasswordReset] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      })
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);

      let handleInputChange = (event) => {
        setPasswordReset((currData) => {
          return { ...currData, [event.target.name]: event.target.value };
        });
      };

      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };
    

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <h2>Forget Password</h2>
      <FormControl>
   
        <AbInput
          name="oldPassword"
          value={passwordReset.oldPassword}
          placeholder="Enter old password"
          required={true}
          onChange={handleInputChange}
        />
        <AbInput
          name="newPassword"
          value={passwordReset.newPassword}
          placeholder="Enter new password"
          required={true}
          onChange={handleInputChange}
        />
        <AbInput
          name="confirmNewPassword"
          value={passwordReset.confirmNewPassword}
          placeholder="Confirm new password"
          required={true}
          onChange={handleInputChange}
        />
        <Button
        variant="contained"
        sx={{width: '8rem', borderRadius: "25px", margin: "1rem 0 0 8rem"}}
        >Confirm</Button>
      </FormControl>
    </Box>
  </Modal>
  )
}

export default ForgetPassword
