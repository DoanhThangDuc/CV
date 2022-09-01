import styled from "styled-components";

export const StyledSayHello = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    height: 90vh;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 40px;
  }
`;
export const StyledExpertiseBox = styled.div``;
export const Contact = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    margin-left: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 30px;
    height: 100vh;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    height: 50vh;
  }
`;
export const StyledReachMe = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & a {
    color: #fff;
  }
`;
export const Infor = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;
export const P10 = styled.p`
  color: #828286;
  font-size: 17px;
  line-height: 35px;
`;
export const Social = styled.div``;
