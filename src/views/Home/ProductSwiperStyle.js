import { Box, height, styled } from "@mui/system";

export const SwiperProduct = styled("div")({
  paddingBlock: "90px",
  borderRadius: "10px",
  border: "none",
});

export const BoxStyles = styled(Box)(({ gap, alignItems, height }) => ({
  display: "flex",
  gap: gap ? gap : "",
  justifyContent: "space-between",
  alignItems: alignItems ? alignItems : "",
  height: height ? height : "",
}));