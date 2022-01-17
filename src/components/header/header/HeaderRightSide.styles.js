import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

export const StyledImgContainer = styled.div`
  margin-top: 98px;
  position: relative;
  display: inline-block;
`;
export const StyledBg = styled.img`
  @media only screen and (max-width: 1745px) {
    border-radius: 40px;
    margin-left: 40rem;
  }
  @media only screen and (max-width: 1000px) {
    margin-left: 20rem;
  }

  @media only screen and (max-width: 600px) {
    max-width: 400px;
    border-radius: 40px;
    margin-left: 0;
  }
`;

export const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12rem;
  position: absolute;
  top: 0%;
  left: -22%;
  @media only screen and (max-width: 1745px) {
    top: 10%;
    left: 30%;
  }
  @media only screen and (max-width: 1000px) {
    top: 10%;
    left: 10%;
  }
  @media only screen and (max-width: 600px) {
    top: -30%;
    left: 1%;
  }
`;

export const StyledSupportMember = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #65676b;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 1rem;
    background: #f5f5f7;
    padding: 0.5rem 2rem;
    border-radius: 24px 24px 24px 0;
    margin-left: 1rem;
    @media only screen and (max-width: 600px) {
      font-size: 10px;
      margin-right: 1rem;
    }
  }
`;

export const StyledCustomer = styled.div`
  p {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 1rem;
    margin-left: 12rem;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    background: #fa9531;
    padding: 0.5rem 2rem;
    border-radius: 24px 24px 6px 24px;
    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
    svg {
      margin-left: 0.5rem;
    }
  }
`;
export const StyledThirdDot = styled(GoPrimitiveDot)`
  color: #ced0d4;
`;
export const StyledSecondDot = styled(GoPrimitiveDot)`
  color: #d8dadf;
`;
export const StyledFirstDot = styled(GoPrimitiveDot)`
  color: #edeff3;
  margin-left: 1rem;
`;
