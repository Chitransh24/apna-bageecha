import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(({ display, justifyContent, alignItems, flexDirection, padding, height, textAlign}) => ({
  display : display ? "flex" : "",
  justifyContent: justifyContent ? "center" : "",
  alignItems: alignItems ? "center" : "",
  padding: padding ? padding : "",
  height: height ? height : "",
  textAlign: textAlign ? "center" : "",
  fontFamily: "Nunito",
}));

export const H1Styles = styled("h1")(({ theme}) => ({
    color: "#618264", 
    fontSize:"50px"
}));

