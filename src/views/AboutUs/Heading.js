import React from "react";
import { BoxStyles, SpanStyles } from "./HeadingStyles";

function Heading() {
  return (
    <BoxStyles
      backgroundColor="#618264"
      color="#dbdbdb"
      textAlign="center"
      fontSize="2rem"
    >
      <BoxStyles
        padding="30px"
        display="flex"
        flexDirection="column"
        color="white"
      >
        <SpanStyles>APNA</SpanStyles>
        <SpanStyles position="relative" top="-41px">
          BAGEECHA
        </SpanStyles>
        <SpanStyles
          position="relative"
          top="-41px"
          fontSize="1.5rem"
          fontWeight="400"
        >
          "where homegrown goodness thrives!"
        </SpanStyles>
      </BoxStyles>
    </BoxStyles>
  );
}

export default Heading;
