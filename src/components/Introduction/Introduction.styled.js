import styled from "styled-components";

export const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-top: 125px;
  color: white;
  font-family: inherit;

  & p {
    font-family: sans-serif;
    font-size: 4rem;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    & p {
      font-size: 2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    & p {
      padding-top: 10vh;
    }
    & span {
      display: none;
    }
    
  }
`;
export const IntroQuote = styled.div``;
