import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
  display: inline-flex;
  width: 100vw;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 2vw;
  }
  @media (max-width: ${({ theme }) => theme.moblie}) {
    padding-bottom: 10vh;
  }
`;

export const ColumnWork = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledProject = styled.div`
  display: inline-flex;
  margin-top: 50px;
  height: 100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
