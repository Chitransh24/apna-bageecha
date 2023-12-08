import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const BoxStyle = styled(Box)(({ flexDirection, alignItems, marginBlock, justifyContent, width }) => ({
    backgroundColor: "#618264",
    display: "flex",
    flexDirection: flexDirection ? flexDirection : "",
    alignItems: alignItems ? alignItems : "",
    marginBlock: marginBlock ? marginBlock : "",
    textAlign: "center",
    justifyContent: justifyContent ? justifyContent : "",
    color:"#FFFFFF",
    width : width ? width : "",
 
}));
export const LiStyles = styled("li")(({ theme }) => ({
    listStyle: "none",
    margin: "10px 40px 0px 0px",
}));
export const Pstyles = styled("p")(({ theme }) => ({
    lineHeight: "1px"
}));


