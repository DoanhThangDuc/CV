import styled from "styled-components";

export const StyledComment = styled.div`
  display: inline-flex;
  padding: 200px 0;
  color: white;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: block;
    margin: 90px 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const StyledOneComment = styled.div`
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: inline-flex;
    justify-content: center;
    margin-top: 2.5rem;
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 4rem;
  height: 4rem;
  clip-path: circle();
`;
export const StyledPersonCommentRole = styled.div`
  padding: 0.7rem 0 0 1rem;
  line-height: 1.8rem;
`;
export const P7 = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: white;
`;
export const P8 = styled.p`
  font-size: 1.2rem;
  color: #828286;
`;
export const StyledPersonCommentQuote = styled.div`
  padding: 1.2rem 25%;

  font-size: 1.3rem;
  color: #828286;
  line-height: 2rem;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0;
  }
`;
export const StyledPersonCommentInfo = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;
