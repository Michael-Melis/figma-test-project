import styled from 'styled-components';

export const StyledDidYuKnowLeft = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    margin-right: 0;
    max-width: 400px;
    margin-left: 0;
  }

  h3 {
    font-size: 14px;
    color: #fa9531;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-left: 3rem;
  }
  h1 {
    margin-left: 3rem;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 2rem;
    margin-left: 3rem;
  }
  img {
    margin-right: 5rem;
    width: 527px;
    height: auto;
    object-fit: contain;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      max-width: 400px;
    }
  }
`;
