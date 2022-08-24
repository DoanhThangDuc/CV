import styled from "styled-components";

export const StyledInForContainer = styled.div`
  width: 100%;
  margin: 10vh 0 0 1vw;
  padding: 10vh 5vw 0;

  border-left: 1px solid rgb(196, 196, 19);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
export const Timeline = styled.div`
  border-bottom: 1px solid #c4cf25;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 40px;
    padding-left: 2vw;
  }
`;
export const Content = styled.div`
  padding-top: 2vh;
  color: #828286;
  font-size: 20px;
  line-height: 30px;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const P3 = styled.p`
  width: 60%;
  padding-bottom: 1vh;
  color: white;
  font-size: 2.2rem;
  line-height: 40px;
`;
export const P4 = styled.p`
  color: #eabe7b;
  padding-bottom: 1vh;

  font-size: 24px;
  &:hover {
    color: #c4cf25;
    transition: 0.5s;
  }
`;
export const P5 = styled.p`
  color: #545457;
  font-size: 18px;
  line-height: 40px;
  &:hover {
    color: #c4cf25;
    transition: 0.5s;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    line-height: 10px;
  }
`;
