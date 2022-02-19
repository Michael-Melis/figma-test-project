import React from 'react';
import didYouKnowSvg from '../../../svg/didYouKnowBg.svg';
import {
  StyledDidYouKnowBg,
  StyledDidYouKnowButton,
  StyledImgContainer,
  StyledDidYouKnowComponents,
} from './DidYouKnowRight.styles';
import Benefit from './benefits/Benefit';

const DidYouKnowRight = () => {
  return (
    <StyledImgContainer>
      <StyledDidYouKnowBg src={didYouKnowSvg} alt="background with pattern" />
      <StyledDidYouKnowComponents>
        <Benefit
          percent="30%"
          title="Generate more revenue"
          text="Create memorable customer experiences that boost revenue."
        />
        <Benefit
          percent="97%"
          title="Improve satisfaction"
          text="Delight your customers with lightning-fast responses."
        />
        <Benefit
          percent="16x"
          title="Boost customer value"
          text="Make more sales by keeping your customers loyal to your brand."
        />

        <StyledDidYouKnowButton>Make your business goals a reality</StyledDidYouKnowButton>
      </StyledDidYouKnowComponents>
    </StyledImgContainer>
  );
};

export default DidYouKnowRight;
