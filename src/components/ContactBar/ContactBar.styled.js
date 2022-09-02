import styled from "styled-components";

export const StyledContactBar = styled.div`
  position: absolute;

  top: 150px;
  right: 0;

  display: flex;
  flex-direction: column;

  & a {
    transform: rotate(90deg);
    padding: 60px;
    text-align: center;
    color: #828286;
    letter-spacing: 3px;
    font-size: 15px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
