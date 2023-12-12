import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(({ display, color, backgroundColor, textAlign, padding, flexDirection }) => ({
  display: display ? display : "",
  color: color ? color : "",
  backgroundColor: backgroundColor ? backgroundColor : "",
  textAlign: textAlign ? textAlign : "",
  fontSize: "2rem",
  padding: padding ? padding : "",
  flexDirection: flexDirection ? flexDirection : "",
}));

export const H1Styles = styled("h1")(({ theme }) => ({
  color: "#618264",
  fontSize: "4.5rem",
}));
export const SpanStyles = styled("span")(({ fontSize , fontWeight, position, top }) => ({
  // margin: "0",
  fontSize: fontSize ? fontSize : "100px",
  fontWeight:  fontWeight ? fontWeight : "1000",
  position: position ? position : "",
  top: top ? top : "",
}));