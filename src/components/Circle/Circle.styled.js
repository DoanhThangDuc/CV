import styled from "styled-components";

export const StyledCircle = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vw;
  top: -360px;

  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    position: absolute;
    border: 1px solid #27271f;
    border-radius: 50%;
  }
  
  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: 8vh;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 25vh;
  }
`;
