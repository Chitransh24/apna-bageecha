import { CardMedia, Typography } from "@mui/material";
import { Box, height, styled } from "@mui/system";

export const BoxStyle = styled(Box)(({ display, height, flexGrow, flex }) => ({
    display: display ? display : "",
    flexDirection: " column",
    minHeight: "100vh",
    overflowX: "clip",
    height: height ? height : "",
    flexGrow: flexGrow ? flexGrow : "",
    flex: flex ? flex : "",
    position: "relative"
}));
export const CardMediaStyles = styled(CardMedia)(({ top, right, bottom, left }) => ({
    height: "100%",
    width: "30vw",
    position: "fixed",
    top: top ? top : "", 
    right: right ? right : "", 
    bottom: bottom ? bottom : "",
    left: left ? left : "",
    zIndex: "-999" 
}));
