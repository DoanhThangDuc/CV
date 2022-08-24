import styled from "styled-components";

export const StyledProjectImg = styled.img`
  width: 15%;
  height: 95%;
  margin-left: 110px;
  &:hover {
    filter: brightness(150%);
    transition: 0.5s;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 0;
    width: 110%;
    height: 110px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 10vh;
  }
`;
export const Content = styled.div`
  height: 110px;
  margin-left: 15px;
  padding-left: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 0;
    padding: 0 10px 0 10px;
  }
`;
