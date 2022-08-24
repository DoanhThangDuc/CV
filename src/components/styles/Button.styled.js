import styled from "styled-components";

export const StyledButton = styled.div`
  width: 80%;
  height: 6vh;
  background-color: #52411b;

  & p {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: "sans-serif";
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 20px;
    margin-right: 20px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.moblie}) {
    font-size: 13px;
    margin: 0 10px 0;
    padding: 0;
  }
`;
