import React from "react";
import girlWithPhone from "../../../images/girlWithPhone.png";
import chatPic from "../../../svg/chatPic.svg";
import {
  StyledConversation,
  StyledSupportMember,
  StyledCustomer,
  StyledImgContainer,
  StyledBg,
  StyledThirdDot,
  StyledSecondDot,
  StyledFirstDot,
} from "./HeaderRightSide.styles";
import { RiCheckDoubleFill } from "react-icons/ri";

const RightSide = () => {
  return (
    <StyledImgContainer>
      <StyledBg src={girlWithPhone} alt="girl wit a phone" />
      <StyledConversation>
        <StyledSupportMember>
          <img src={chatPic} alt="user profile pic" />

          <p>
            Hello, I'm John, how may I<br /> help you?
          </p>
        </StyledSupportMember>
        <StyledCustomer>
          <p>
            I'd like to check my order <br />
            status . <RiCheckDoubleFill />
          </p>
        </StyledCustomer>
        <StyledSupportMember>
          <img src={chatPic} alt="user profile pic" />
          <p>
            No problem, please provide me
            <br /> with your order ID.
          </p>
        </StyledSupportMember>
        <StyledCustomer>
          <p>
            My order ID is GQ34566 <RiCheckDoubleFill />
          </p>
        </StyledCustomer>
        <StyledSupportMember>
          <img src={chatPic} alt="user profile pic" />

          <StyledFirstDot />
          <StyledSecondDot />
          <StyledThirdDot />
        </StyledSupportMember>
      </StyledConversation>
    </StyledImgContainer>
  );
};

export default RightSide;
