import { Button } from "@mui/material";
import { Box, Container, padding, styled, typography } from "@mui/system";

export const BoxStyles = styled(Box)(({ borderRadius, padding, position, top, left, transform, bgcolor, boxShadow }) => ({
    borderRadius: borderRadius ? "23px" : "",
    padding: padding ? padding : "",
    position: position ? "absolute" : "",
    top: top ? "50%" : "",
    left: left ? "50%" : "",
    transform: transform ? "translate(-50%, -50%)" : "",
    backgroundColor: bgcolor ? "white" : "",
    boxShadow: boxShadow ? 24 : "",
}));

export const H2Styles = styled("h2")(({ theme }) => ({
    fontSize: "1.3rem",
    fontWeight: "500",
    paddingLeft: "15px",
}));

export const ButtonStyles = styled(Button)(({ theme }) => ({
    width: "8rem",
    borderRadius: "25px",
    margin: "auto",
    padding: "10px 16px",
}));
