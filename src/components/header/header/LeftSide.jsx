import React from "react";
import {
  StyledMainHeaderDiv,
  StyledHeaderDiv,
  StyledTics,
  StyledTic,
  StyledGetStartedSection,
  StyledUsedBy,
  StyledLogos,
} from "./HeaderLeftSide.styles";
import playSvg from "../../../svg/play.svg";
import airbusSvg from "../../../svg/airbus.svg";
import forbesSvg from "../../../svg/forbes.svg";
import nascarSvg from "../../../svg/nascar.svg";
import universitySvg from "../../../svg/university.svg";

const LeftSide = () => {
  return (
    <StyledMainHeaderDiv>
      <StyledHeaderDiv>
        <h1>
          {}
          Provide excellent <br />
          <span> customer </span>service.
        </h1>
        <p>
          Answer more tickets with <br />
          all-in-one help desk software.
        </p>
      </StyledHeaderDiv>
      <StyledTics>
        <StyledTic>
          <p>✓ No setup fee</p>
          <p>✓ Customer service 24/7</p>
        </StyledTic>
        <StyledTic>
          <p>✓ No credit card required</p>
          <p>✓ Cancel any time</p>
        </StyledTic>
      </StyledTics>
      <StyledGetStartedSection>
        <button>Get Started | 14 days free</button>

        <img src={playSvg} alt="play svg icon" />
        <p>See It In Action</p>
      </StyledGetStartedSection>
      <StyledUsedBy>
        <h3>Used by</h3>
        <StyledLogos>
          <img src={airbusSvg} alt="aribus logo" />
          <img src={forbesSvg} alt="forbes logo" />
          <img src={nascarSvg} alt="nascar logo" />
          <img
            src={universitySvg}
            alt="University of southern california logo"
          />
        </StyledLogos>
      </StyledUsedBy>
      <div></div>
    </StyledMainHeaderDiv>
  );
};

export default LeftSide;
