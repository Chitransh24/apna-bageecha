import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(({ display, width, margin }) => ({
  display : display ? display : "",
  width: width ? width : "",
  margin: margin ? margin : "",
  justifyContent: "center" 
}));

export const H1Styles = styled("h1")(({ theme }) => ({
    fontSize: "40px", 
    color: "#618264", 
    fontWeight: "400"
}));
export const PStyles = styled("p")(({ theme }) => ({
    color: "#676767", 
    fontSize: "22px", 
    fontWeight: "400" 
}));


