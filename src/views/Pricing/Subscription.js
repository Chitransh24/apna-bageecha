import React from "react";

import {
  BoxStyles,
  ButtonStyles,
  CheckCircleStyles,
  CheckOutlineStyles,
  ContainerStyles,
  H1Styles,
  H4Styles,
  PStyles,
  SpanStyles,
} from "./SubscriptionStyles";

function Subscription(props) {
  let { services1, title, color, backgroundColor } = props;
  console.log(color);
  return (
    <ContainerStyles backgroundColor={backgroundColor} color={color}>
      <BoxStyles display="inline">
        <H1Styles>{title}</H1Styles>
        <PStyles right top>
          Most Popular
        </PStyles>
      </BoxStyles>
      <BoxStyles
        height="3rem"
        width="5.5rem"
        backgroundColor={color}
        borderRadius="0.9rem"
        color={backgroundColor}
        bottom="13%"
        left="68%"
      >
        <H4Styles>&#8377;550.00</H4Styles>
        <PStyles bottom fontSize>
          per month
        </PStyles>
      </BoxStyles>
      <BoxStyles
        display="inline-block"
        justifyContent="center"
        alignItems="center"
        float="left"
        textAlign="left"
        fontSize="0.7rem"
        left="7%"
        bottom="12.5%"
        width="16rem"
        color={color}
      >
        <SpanStyles>
          <CheckCircleStyles /> {services1[0]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckCircleStyles /> {services1[1]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckCircleStyles /> {services1[2]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckOutlineStyles /> {services1[3]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckOutlineStyles /> {services1[4]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckOutlineStyles /> {services1[5]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckOutlineStyles /> {services1[6]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckOutlineStyles /> {services1[7]} <br />
        </SpanStyles>
        <SpanStyles>
          <CheckOutlineStyles /> {services1[8]} <br />
        </SpanStyles>
      </BoxStyles>
      <ButtonStyles color={color} backgroundColor={backgroundColor}>
        Get Started
      </ButtonStyles>
    </ContainerStyles>
  );
}

export default Subscription;
