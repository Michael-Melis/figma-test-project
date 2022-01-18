import styled from "styled-components";

export const StyledMainHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16rem;
  margin-left: 361px;
  margin-right: 5rem;
  @media only screen and (max-width: 1000px) {
    margin-top: 2rem;
    margin-left: 8rem;
    margin-right: 0;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const StyledHeaderDiv = styled.div`
  margin-bottom: 1rem;
  @media only screen and (max-width: 600px) {
  }
  h1 {
    font-size: 55px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;

    span {
      background: -webkit-linear-gradient(left, #ffbd39, #fa9531);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media only screen and (max-width: 600px) {
      font-size: 35px;
    }
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-size: 26px;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export const StyledTics = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const StyledTic = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  p {
    margin-right: 1rem;
    color: #8c9097;
  }
`;

export const StyledGetStartedSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
  button {
    background: -webkit-linear-gradient(left, #ffbd39, #fa9531);
    border: none;
    cursor: pointer;
    padding: 1rem;
    color: #fff;
    border-radius: 6px;
    font-size: 14px;
    margin-right: 2rem;
    font-weight: bold;
  }
  p {
    margin-left: 1rem;
    font-weight: 600;
  }
`;
export const StyledUsedBy = styled.div`
  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #8c9097;
  }
  display: flex;
  flex-direction: column;
`;

export const StyledLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    margin-right: 1rem;
  }
`;
