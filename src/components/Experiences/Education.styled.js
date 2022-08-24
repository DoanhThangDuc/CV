import styled from "styled-components";

export const StyledEducation = styled.div`
  flex: 1;
  padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 50%;
  }
`;
