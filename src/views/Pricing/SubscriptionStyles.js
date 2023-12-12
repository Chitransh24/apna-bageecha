import { CheckCircle, CheckCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";

export const ContainerStyles = styled(Box)(({ backgroundColor, color }) => ({
  height: "27.5rem",
  width: "21rem",
  marginRight: "1.4rem",
  borderRadius: "2rem",
  backgroundColor: `${backgroundColor}`,
  color: `${color}`,
  boxShadow: "3px 3px 12px 0px rgba(0, 0, 0, 0.20)",
}));

export const BoxStyles = styled(Box)(
  ({
    display,
    justifyContent,
    alignItems,
    float,
    textAlign,
    fontSize,
    left,
    bottom,
    width,
    height,
    backgroundColor,
    borderRadius,
    color,
  }) => ({
    display: display ? display : "",
    justifyContent: justifyContent ? justifyContent : "",
    alignItems: alignItems ? alignItems : "",
    float: float ? float : "",
    textAlign: textAlign ? textAlign : "",
    fontSize: fontSize ? fontSize : "",
    position: "relative",
    left: left ? left : "",
    bottom: bottom ? bottom : "",
    height: height ? height : "",
    width: width ? width : "",
    backgroundColor: backgroundColor ? backgroundColor : "",
    borderRadius: borderRadius ? borderRadius : "",
    color: color ? color : "",
    fontFamily: "Nunito",
  })
);

export const H1Styles = styled("h1")(({ theme }) => ({
  position: "relative",
  left: "7.5%",
  top: "9%",
  fontSize: "1.7rem",
  textAlign: "left",
}));

export const H4Styles = styled("h4")(({ theme }) => ({
  position: "relative",
  top: ".5rem",
}));
export const PStyles = styled("p")(({ right, top, bottom, fontSize }) => ({
  position: "relative",
  right: right ? "28%" : "",
  top: top ? "3%" : "",
  bottom: bottom ? "1rem" : "",
  fontSize: fontSize ? "0.7rem" : "",
}));

export const SpanStyles = styled("span")(({ theme }) => ({
  textAlign: "center",
  width: "6rem",
}));
export const CheckCircleStyles = styled(CheckCircle)(({ theme }) => ({
  position: "relative",
  top: "0.2rem",
  fontSize: "1.1rem",
}));

export const CheckOutlineStyles = styled(CheckCircleOutlined)(({ theme }) => ({
  position: "relative",
  top: "0.2rem",
  fontSize: "1.1rem",
}));

export const ButtonStyles = styled("Button")(({ backgroundColor, color }) => ({
  height: "2rem",
  width: "6rem",
  borderRadius: "20px",
  backgroundColor: `${color}`,
  color: `${backgroundColor}`,
  fontSize: ".65rem",
  position: "relative",
  bottom: "3.4rem",
  border: "none",
}));
