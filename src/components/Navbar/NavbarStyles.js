import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";



export const BoxStyle = styled(Box) ({
    flexGrow: 1, 
    display: { xs: "none", md: "flex" }
});

export const LinkStyle = styled(Link) ({
    textDecoration: "none",
    color: "#618264",
    marginLeft: "15px",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontWeight: 500,
});

export const Typography1Style = styled(Typography)(({ color, textAlign, flexDirection, letterSpacing }) => ({
    // display: { xs: "none", md: "flex" },
    display: "flex",
    fontFamily: "Nunito",
    fontWeight: 700,
    letterSpacing: letterSpacing ? letterSpacing : "",
    color: color ? color : "black",
    textDecoration: "none",
    textAlign: textAlign ? textAlign : "center",
    flexDirection: flexDirection ? flexDirection : "column",
 
}));
