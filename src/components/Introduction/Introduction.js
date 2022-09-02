import { StyledIntroduction } from "./Introduction.styled";
import { SectionBar } from "../styles/SectionBar.styled";
function Introduction() {
  return (
    <StyledIntroduction>
      <div id="intro-link" style={{ paddingTop: 70 + "px" }}></div>
      <SectionBar>
        <span /> <p>HELLO WORLD</p> <span />
      </SectionBar>
      <p>
        I am Duc, <br></br> a Web Developer.
      </p>
    </StyledIntroduction>
  );
}
export default Introduction;
