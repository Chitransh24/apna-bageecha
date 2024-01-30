import { Box, height, styled } from "@mui/system";
import AbButton from "../../components/AbButton/AbButton";

export const SwiperProduct = styled("div")({
  paddingBlock: "90px",
  borderRadius: "10px",
  border: "none",
});

export const BoxStyles = styled(Box)(
  ({ display, paddingInline, gap, marginBlock, alignItems, height }) => ({
    display: display ? display : "",
    paddingInline: paddingInline ? paddingInline : "",
    gap: gap ? gap : "",
    justifyContent: "space-between",
    marginBlock: marginBlock ? marginBlock : "",
    alignItems: alignItems ? alignItems : "",
    height: height ? height : "",
  })
);
export const AbButtonStyles = styled(AbButton)(
  ({ backgroundColor, color }) => ({
    padding: "9px 83px",
    backgroundColor: backgroundColor ? backgroundColor : "",
    border: "2px solid #618264",
    borderRadius: "39px",
    textTransform: "none",
    height: "100%",
    color: color ? color : "",
    "&:hover": {
      backgroundColor: "#618264",
      color: "#fff",
    },
    "&:focus": {
      backgroundColor: "#618264",
      color: "#fff",
    },
  })
);
