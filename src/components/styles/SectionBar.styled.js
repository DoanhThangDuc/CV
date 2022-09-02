import styled from "styled-components";

export const SectionBar = styled.div`
  width: ${(props) => (props.width ? props.width : "300px")};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & span {
    padding: 0 15px;
    width: 5%;
    border-bottom: 1px solid rgb(173, 169, 169);
  }

  & p {
    color: #eabe7b;
    font-size: 2rem;
    letter-spacing: 4px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: fit-content;
    & p {
      align-items: center;
      justify-content: center;
    }
  }
`;
