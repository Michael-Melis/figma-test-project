import styled from "styled-components";

export const StyledPriceComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 89px 277px;
  background: #f5f5f7;
  border-radius: 15px;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    margin: 1rem 2rem;
    flex-direction: column;
  }

  h3 {
    font-size: 14px;
    color: #fa9531;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;
export const StyledParagraph = styled.p`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 2rem;
`;

export const StyledLeftPriceDiv = styled.div`
  margin: 1rem 2rem;
`;
export const StyledPriceLists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const StyledButton = styled.button`
  background: -webkit-linear-gradient(left, #ffbd39, #fa9531);
  border: none;
  padding: 1rem 3rem;
  cursor: pointer;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border-radius: 6px;
`;

export const StyledH1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 2rem;
`;
