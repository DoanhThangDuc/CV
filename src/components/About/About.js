import { SectionBar } from "../styles/SectionBar.styled";
import { StyledButton } from "../styles/Button.styled";
import { StyledAbout, AboutContent, AboutQuote } from "./About.styled";

function About() {
  return (
    <StyledAbout>
      <img src="./assets/images/avatar.jpg" id="about-link" alt="about" />
      <AboutContent>
        <SectionBar>
          <span></span>
          <p>ABOUT ME</p>
          <span></span>
        </SectionBar>

        <AboutQuote>
          <p>
            I graduated with an International Economics degree in the Ho Chi
            Minh City Open University, looking for a position in Quality System
            Assistant Staff, as well as problems and solutions within the
            industry. As a person, I am hard working, passionate and always
            curious about problems. As an employee, I am honest, responsible,
            friendly and helpful. I hope I can bring all that to contribute
            toward the development of the Company.
          </p>
        </AboutQuote>
        <StyledButton>
          <a>Download CV</a>
        </StyledButton>
      </AboutContent>
    </StyledAbout>
  );
}
export default About;
