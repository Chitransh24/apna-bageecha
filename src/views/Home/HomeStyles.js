import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";


export const MainBoxStyles = styled(Box)({
    minHeight: "100vh", 
    width: "100vw"
});

export const BoxStyle = styled(Box)(({ flexDirection, display, height, width, flexWrap, padding, backgroundColor, borderRadius, position, left }) => ({
    display: "flex",
    flexDirection: flexDirection ? flexDirection : "",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    height: height ? height : "",
    width: width ? width : "",
    flexWrap: flexWrap ? flexWrap : "", 
    padding: padding ? padding : "",
    backgroundColor: backgroundColor ? backgroundColor : "",
    borderRadius: borderRadius ? borderRadius : "" ,
    position: position ? position : "",
    left: left ? left : "",
}));
export const ButtonStyles = styled(Button)(({theme}) => ({
    fontSize: "12px",
    padding: "8px 21px 8px 43px",
    width: "100%",
    borderRadius: "25px",
    backgroundColor: "#618264",
    border: "none",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ":hover": { backgroundColor: "#618264" },
}));

