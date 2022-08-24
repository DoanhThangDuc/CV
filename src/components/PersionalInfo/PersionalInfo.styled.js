import styled from "styled-components";

export const StyledPersionalInfo = styled.div`
  display: inline-flex;
  padding: 0 0 30vh 0;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.moblie}) {
  }
`;
