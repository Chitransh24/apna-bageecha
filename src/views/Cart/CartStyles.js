import { Button, Container, IconButton } from "@mui/material";
import { Box, styled } from "@mui/system";

export const ContainerStyles = styled(Container)(({ open }) => ({
    transition: "all 500ms ease-in-out",
    maxHeight: "500px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: open ? "30%" : 0,
    borderRadius: "40px",
    backgroundColor: "white",
    position: "fixed",
    top: "50%",
    left: "50%",
    overflowY: "auto",
    overflowX: "hidden",
    transform: "translate(-50%, -50%)",
    zIndex: 20,
    padding: "2rem",
    textAlign: "center",
}));
export const BoxStyles = styled(Box)(({ width, fontWeight,  textTransform, marginTop }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: width ? "100%" : "",
    textTransform: textTransform ? "uppercase" : "",
    fontWeight: fontWeight ? "bold" : "",
    marginTop: marginTop ? "1rem" : "",
}));

export const H3Styles = styled("h3")(({ theme }) => ({
    justifyContent: "start",
}));

export const IconButtonStyles = styled(IconButton)(({ theme}) => ({
    cursor: "pointer",
    width: "2rem",
    height: "2rem",
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
    fontSize: "1.5rem",
}));

export const ButtonStyles = styled(Button)(({ width, height, marginLeft }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#618264",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "35px",
    marginLeft: marginLeft ? marginLeft : "",
    width: width ? width : "",
    height: height ? height : "",
}));