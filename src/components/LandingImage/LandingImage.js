import React from "react";
import { CardMediaStyles, TypographyStyles } from "./LandingImageStyles";
import { Box } from "@mui/system";

const App = ({ src, desc }) => {
  return (
    <Box>
      <CardMediaStyles image={src} alt="landingimage1" />
      <TypographyStyles>{desc}
      </TypographyStyles>
    </Box>
  );
};

export default App;
