import { Box, styled } from "@mui/system";

export const BoxStyles = styled(Box)(
  ({
    justifyContent,
    alignItems,
    flexDirection,
    padding,
    margin,
    maxWidth,
    maxHeight,
  }) => ({
    display: "flex",
    justifyContent: justifyContent ? justifyContent : "",
    alignItems: alignItems ? alignItems : "",
    flexDirection: flexDirection ? flexDirection : "",
    padding: padding ? padding : "",
    margin: margin ? margin : "",
    fontFamily: "Nunito",
    maxWidth: maxWidth ? "100vw" : "",
    minWidth: maxHeight ? "100vw" : "",
  })
);

export const H1Styles = styled("h1")(({ theme }) => ({
  fontFamily: "Nunito",
  fontSize: "35px",
}));
