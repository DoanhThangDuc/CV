import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  display: inline-flex;
  justify-content: center;

  top: 0px;
  left: 5%;
  z-index: 100;
  width: 90%;

  background-color: #141516;

  & a {
    display: flex;
    flex: 1;

    align-items: center;
    height: 64px;

    padding-left: 20px;

    font-size: 10px;
    font-weight: 400;
    font-family: inherit;
    letter-spacing: 2px;
    text-decoration: none;

    color: white;
    text-align: left;

    border: 0.3px solid rgb(46, 46, 46);
    cursor: pointer;
    background: ${(props) =>
      props.changeBackground ? "#4c4949" : "transparent"};
    transition: 0.8s;
  }
  & a:hover {
    color: rgb(206, 163, 21);
    transition: 0.5s;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
export const NavigationStyled = styled.div``;
