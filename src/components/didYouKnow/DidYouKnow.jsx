import React from "react";
import DidYouKnowLeft from "./didYouKnowComponents/DidYouKnowLeft";
import DidYouKnowRight from "./didYouKnowComponents/DidYouKnowRight";
import { StyledDidYouKnow } from "./DidYouKnow.styles";
const DidYouKnow = () => {
  return (
    <StyledDidYouKnow>
      <DidYouKnowLeft />
      <DidYouKnowRight />
    </StyledDidYouKnow>
  );
};

export default DidYouKnow;
