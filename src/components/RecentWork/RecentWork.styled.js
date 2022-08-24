import styled from "styled-components";

export const StyledRecentWork = styled.div``;

export const P2 = styled.p`
  width: 90vw;
  padding: 0 4vw;
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
  }
`;
