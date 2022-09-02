import styled from "styled-components";

export const StyledExpertiseBox = styled.div`
  width: 100vw;
  padding: 40vh 0 20vh 10vw;
  color: white;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 30vh 0 20vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const P1 = styled.div`
  font-size: 1.8rem;
  color: #eabe7b;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 2rem;
    margin: 0;
    padding-bottom: 25px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    margin: 0;
    padding-bottom: 25px;
  }
`;
export const P2 = styled.div`
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 2rem;
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    margin: 0;
  }
`;
