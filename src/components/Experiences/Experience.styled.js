import styled from "styled-components";
export const StyledExperience = styled.div`
  flex: 1;
  padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 50%;
    margin-left: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 1rem;
  }
`;
