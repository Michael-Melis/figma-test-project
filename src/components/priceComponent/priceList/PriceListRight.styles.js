import styled from "styled-components";

export const StyledPriceListComponentRight = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 16px;
  flex-direction: column;
  background: #fff;
  height: 425px;
  width: 279px;
  margin: 2rem;
  padding: 0 2rem;

  img {
    padding-top: 1.5rem;
    margin-bottom: 1rem;
  }
  button {
    border: 2px solid black;
    cursor: pointer;
    padding: 0.6rem 4rem;
    border-radius: 6px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background: #fff;
    color: #050505;
  }
  h1 {
    font-size: 24px;
    color: #050505;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 2.3rem;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin-bottom: 2.1rem;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #65676b;
    margin-bottom: 0.9rem;
  }
`;
