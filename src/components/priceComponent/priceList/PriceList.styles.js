import styled from "styled-components";

export const StyledPriceListComponent = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 16px;
  flex-direction: column;
  background: #fff;
  height: 425px;
  width: 279px;
  margin: 2rem;
  padding: 3rem;
  @media only screen and (max-width: 1000px) {
    width: 80%;
    align-items: center;
    height: auto;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
    align-items: center;
    height: auto;
  }

  button {
    border: 2px solid black;
    cursor: pointer;
    padding: 0.6rem 4rem;
    border-radius: 6px;
    background: #fff;
    color: #050505;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    display: flex;
    @media only screen and (max-width: 1000px) {
      padding: 1rem;
      margin-bottom: 2rem;
    }
  }
  h1 {
    margin-top: 1rem;
    font-size: 24px;
    color: #050505;
    font-family: "Poppins", sans-serif;
    font-weight: bold;

    margin-bottom: 1rem;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #65676b;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
export const StyledH1 = styled.h1``;
