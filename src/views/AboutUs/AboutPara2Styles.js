import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(({ display, color, width, margin }) => ({
  display: display ? display : "",
  color: color ? color : "",
  width: width ? width : "",
  margin: margin ? margin : "",
  justifyContent: "center",
}));

export const H1Styles = styled("h1")(({ theme }) => ({
  color: "#618264",
  fontSize: "4.5rem",
}));
export const PStyles = styled("p")(({ theme }) => ({
  color: "#676767",
  fontSize: "22px",
  fontWeight: "400",
}));
