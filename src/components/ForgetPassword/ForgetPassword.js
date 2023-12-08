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
        borderRadius:"23px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
      };
    

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <div style={{padding:"5rem 9rem", borderRadius:"29px"}}>
        <div>
    <h2 style={{fontSize:"19px", fontWeight:"500", paddingLeft:"15px"}} >Forget Password ?</h2></div>
      <FormControl>
   
        <AbInput
          name="oldPassword"
          value={passwordReset.oldPassword}
          placeholder="Enter old password"
          required={true}
          onChange={handleInputChange}
          inputProps={{ style: { textAlign: 'center' } }}
        />
        <AbInput
          name="newPassword"
          value={passwordReset.newPassword}
          placeholder="Enter new password"
          required={true}
          onChange={handleInputChange}
          inputProps={{ style: { textAlign: 'center' } }}
        />
        <AbInput
          name="confirmNewPassword"
          value={passwordReset.confirmNewPassword}
          placeholder="Confirm new password"
          required={true}
          onChange={handleInputChange}
          inputProps={{ style: { textAlign: 'center' } }}
        />
        <Button
        variant="contained"
        sx={{width: '8rem', borderRadius: "25px", margin: "auto",padding: "10px 16px"}}
        >Confirm</Button>
      </FormControl>
      </div>
    </Box>
   
  </Modal>
  )
}

export default ForgetPassword
