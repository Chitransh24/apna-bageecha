import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";



export const BoxStyle = styled(Typography)(({ flexDirection, alignItems, marginBlock, justifyContent, width }) => ({
    backgroundColor: "#618264",
    display: "flex",
    flexDirection: flexDirection ? flexDirection : "",
    alignItems: alignItems ? alignItems : "",
    marginBlock: marginBlock ? marginBlock : "",
    textAlign: "center",
    justifyContent: justifyContent ? justifyContent : "",
    color:"#FFFFFF",
    width : width ? width : "",
 
}));
export const LiStyles = styled("li")(({ flexDirection, }) => ({
    listStyle: "none",
    margin: "10px 40px 0px 0px",
}));
export const Pstyles = styled("p")(({ flexDirection, }) => ({
    lineHeight: "1px"
}));


