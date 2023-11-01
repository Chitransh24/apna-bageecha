import { Checkbox } from "@mui/material";
import React from "react";

const AbCheckbox = ({ label, color }) => {
  return (
    <Checkbox {...label} labelStyle={{ color: color ? color : "#618264" }} />
  );
};

export default AbCheckbox;
