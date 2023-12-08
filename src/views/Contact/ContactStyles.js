import { CardMedia, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(
  ({
    display,
    width,
    flexDirection,
    gap,
    alignItems,
    height,
    padding,
    backgroundColor,
  }) => ({
    display: display ? display : "",
    fontFamily: "Nunito",
    width: width ? width : "",
    gap: gap ? gap : "",
    flexDirection: flexDirection ? flexDirection : "",
    padding: padding ? padding : "",
    backgroundColor: backgroundColor ? backgroundColor : "",
  })
);

export const CardMediaStyles = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));
export const H1Styles = styled("h1")(({ theme }) => ({
  fontFamily: "Nunito",
  fontWeight: "1000",
  letterSpacing: "2px",
}));
export const PStyles = styled("p")(({ theme }) => ({
  paddingBottom: "50px",
}));
export const InputStyles = styled("input")(({ width }) => ({
  borderRadius: "25px",
  backgroundColor: "#e3e3e3",
  border: "none",
  padding: "20px",
  width: width ? width : "",
}));
export const TextareaStyles = styled("Textarea")(({ width }) => ({
  borderRadius: "25px",
  backgroundColor: "#e3e3e3",
  padding: "20px",
  border: "none",
  resize: "none",
  fontFamily: "Nunito",
}));
