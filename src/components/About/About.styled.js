import styled from "styled-components";

export const StyledAbout = styled.div`
  display: inline-flex;
  padding: 100vh 1vw 0 1vw;
  color: white;
  & img {
    flex: 1;
    width: 50%;
  }

  
  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column-reverse;
    padding: 45vh 0 0 0;

    & img {
      width: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.moblie}) {
    padding: 43vh 0 0 0;
    margin-top: 30px;
    & img {
      width: 100%;
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 50px 40px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 20px 10px;
  }
`;

export const AboutQuote = styled.div`
  & p {
    padding: 60px 0;
    font-size: 1.2rem;
    font-family: sans-serif;
    line-height: 45px;
    letter-spacing: 1px;
    color: white;
  }
  
  @media (max-width: ${({ theme }) => theme.tablet}) {
    & p {
      text-align: center;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    & p {
      line-height: 23px;
      letter-spacing: 1px;
    }
  }
`;
