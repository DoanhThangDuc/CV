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
    display: inline-flex;
    margin-top: 20px;
    margin-bottom: 30px;
    height: 100vh;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    display:flex;
    flex-direction: column-reverse;
  }
`;
export const StyledReachMe = styled.div`

& a {
  color: #fff;
}
& p{
  color: #fff;
}
`;
export const P10 = styled.p`
  color: #828286;
  font-size: 17px;
  line-height: 35px;`;
export const Social = styled.div``;
