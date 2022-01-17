import styled from "styled-components";

export const StyledImgBenefitContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 16px;
  margin: 1rem 1rem;
  @media only screen and (max-width: 600px) {
    margin: 5px 10px;
  }
`;

export const StyleBenefitElementBg = styled.img`
  @media only screen and (max-width: 600px) {
    max-width: 410px;
  }
`;

export const StyledBenefitComponent = styled.div`
  display: flex;
  width: 80%;
  border-radius: 16px;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  top: 29%;
  left: 10%;
  align-items: center;
  @media only screen and (max-width: 600px) {
    max-width: 400px;
  }
  h4 {
    background: transparent;
    margin-right: 5rem;
    font-size: 50px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    background: -webkit-linear-gradient(left, #ffbd39, #fa9531);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media only screen and (max-width: 600px) {
      font-size: 25px;
    }
  }
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 20px;
    background: white;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  p {
    background: white;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;

export const StyledBenefitInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 20px;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;
