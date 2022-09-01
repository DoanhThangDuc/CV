import styled from "styled-components";

export const NavMobile = styled.div`
  display: none;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 300;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #545457;
    background-color: #141516;
  }
  @media only screen and (max-width: ${({ theme }) => theme.moblie}) {
  }
`;
export const HambergerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  background-color: transparent;
  cursor: pointer;

  transition: all 0.5s ease-in-out;
`;

export const HambergerBar = styled.div`
  width: 50px;
  height: 6px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5 ease-in-out;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    border-radius: 5px;

    background: #fff;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  &::before {
    transform: translateY(-16px);
  }

  &::after {
    transform: translateY(16px);
  }
`;
export const HambergerBarOpening = styled(HambergerBar)`
  transform: translateX(-50px);
  transition: all 0.5 ease-in-out;

  background: transparent;
  box-shadow: none;
  &::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  &::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
`;
export const NavMobileLogo = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding-left: 40px;
    padding-top: 30px;

    color: white;
    font-size: 20px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.moblie}) {
  }
`;

export const LinkContainer = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    position: fixed;
    top: 7vh;
    left: 0;

    flex-direction: column;

    width: 100%;
  }
  @media only screen and (max-width: ${({ theme }) => theme.moblie}) {
    position: fixed;
    left: 0;

    flex-direction: column;

    width: 100%;
    top: 8.6vh;
  }
`;
export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: #141516;
  border: 1px solid #2c2c2d;
  color: white;
  position: relative;
`;
