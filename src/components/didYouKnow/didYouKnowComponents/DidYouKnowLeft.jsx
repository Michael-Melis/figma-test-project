import React from 'react';
import didYouKnowSvg from '../../../svg/didYouKnow.svg';
import { StyledH1 } from '../../priceComponent/PriceComponent.styles';
import { StyledDidYuKnowLeft } from './DidYouKnowLeft.styles';

const DidYouKnowLeft = () => {
  return (
    <StyledDidYuKnowLeft>
      <h3>Pioneering software</h3>
      <StyledH1>Did you know?</StyledH1>
      <p>
        Established in 2006, LiveAgent was the first solution on the
        <br /> market to offer live chat and help desk capabilities. As of <br />
        2021, LiveAgent is the best rated and most reviewed help <br />
        desk solution on the market, serving over 150 million users
        <br /> and 40,000 businesses worldwide.
      </p>
      <img src={didYouKnowSvg} alt="did you know graph" />
    </StyledDidYuKnowLeft>
  );
};

export default DidYouKnowLeft;
