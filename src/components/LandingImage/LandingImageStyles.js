import { CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardMediaStyles = styled(CardMedia)(({ theme }) => ({
    borderRadius: "5.5rem",
    height: "67vh",
    width: "20vw",
}));
export const TypographyStyles = styled(Typography)(({ theme }) => ({
    display: "block",
    width: "auto",
    margin: "auto",
    paddingTop: "14px",
}));