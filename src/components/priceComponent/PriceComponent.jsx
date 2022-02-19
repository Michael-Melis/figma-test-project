import React from 'react';
import PriceListLeft from './priceList/PriceListLeft';
import PriceListRight from './priceList/PriceListRight';
import {
  StyledPriceComponent,
  StyledPriceLists,
  StyledButton,
  StyledH1,
  StyledParagraph,
  StyledLeftPriceDiv,
} from './PriceComponent.styles';

const PriceComponent = () => {
  return (
    <StyledPriceComponent>
      <StyledLeftPriceDiv>
        <h3>Best price</h3>
        <StyledH1>
          A fair knowledge
          <br /> base software
        </StyledH1>
        <StyledParagraph>
          Creating your own knowledge center doesn’t have
          <br /> to be an expensive feat. LiveAgent offers multiple pricing plans that
          <br /> cater to all support needs. Get our standalone
          <br /> knowledge base software with the least expensive plan or take
          <br /> a look at other plans that offer additional features.
        </StyledParagraph>
        <StyledButton>Pricing</StyledButton>
      </StyledLeftPriceDiv>
      <StyledPriceLists>
        <PriceListLeft />
        <PriceListRight />
      </StyledPriceLists>
    </StyledPriceComponent>
  );
};

export default PriceComponent;
