import styled from "styled-components";

export const StyledExSection = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
