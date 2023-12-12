import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(({ display, justifyContent, alignItems, flexDirection, padding, margin}) => ({
  display : display ? display : "flex",
  justifyContent: justifyContent ? justifyContent : "",
  alignItems: alignItems ? alignItems : "",
  flexDirection: flexDirection ? flexDirection : "",
  padding: padding ? padding : "",
  margin: margin ? margin : "",
  fontFamily: "Nunito",
}));

export const H1Styles = styled("h1")(({ theme }) => ({
    fontFamily: "Nunito", 
    padding: "30px 0px", 
    fontSize: "35px"
}));
