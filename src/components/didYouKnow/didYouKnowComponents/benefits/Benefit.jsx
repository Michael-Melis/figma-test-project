import React from "react";
import elementSvg from "../../../../svg/element.svg";
import {
  StyledImgBenefitContainer,
  StyleBenefitElementBg,
  StyledBenefitComponent,
  StyledBenefitInfo,
} from "./Benefit.styles";

const Benefit = ({ percent, title, text }) => {
  return (
    <StyledImgBenefitContainer>
      <StyleBenefitElementBg src={elementSvg} alt="pattern background" />
      <StyledBenefitComponent>
        <h4>{percent}</h4>
        <StyledBenefitInfo>
          <h1>{title}</h1>
          <p>{text}</p>
        </StyledBenefitInfo>
      </StyledBenefitComponent>
    </StyledImgBenefitContainer>
  );
};

export default Benefit;
