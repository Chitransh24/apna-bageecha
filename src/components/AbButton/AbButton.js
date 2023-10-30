import { Button } from '@mui/material'
import React from 'react'

const AbButton = (props) => {
    const {text,variant,onClick, color} = props;
    console.log(color)
  return (
    <Button sx={{borderRadius: "26px", textTransform:"none"}} variant={variant ? variant :"contained"} {...props}>{text ? text :"Click Me"}</Button>
  )
}

export default AbButton
