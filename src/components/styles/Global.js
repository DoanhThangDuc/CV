import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  scroll-behavior: smooth;
  text-decoration: none;
  box-sizing: border-box;  }

  body 
  {
  background: ${({ theme }) => theme.colors.body};
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  }
  .p1 {
  margin-top: 180px;
  margin-left: 80px;
  margin-bottom: 40px;
  letter-spacing: 3px;
  color: white;
}
.p2 {
  width: 90%;
  display: flex;
  margin: auto;
  color: white;
  font-size: 50px;
  font-weight: 750;
  line-height: 50px;
}
`;


export default GlobalStyles;
