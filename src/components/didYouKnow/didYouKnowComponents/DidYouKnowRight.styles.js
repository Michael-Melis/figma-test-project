import styled from "styled-components";
import { StyledButton } from "./../../priceComponent/PriceComponent.styles";

export const StyledImgContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledDidYouKnowBg = styled.img`
  @media only screen and (max-width: 600px) {
    max-width: 400px;
  }
`;
export const StyledDidYouKnowButton = styled(StyledButton)`
  width: 89%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    max-width: 400px;
  }
`;
export const StyledDidYouKnowComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0;
`;
