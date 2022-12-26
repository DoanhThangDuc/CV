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
            I graduated with an International Economics degree from the Ho Chi
            Minh City Open University. With a passion for technology, I am
            looking for a position as a Web Developer Internship, as well as
            problems and solutions within the industry. I have nearly one year
            of studying and building an app web by myself. Besides, I also have
            experience teaching English and working in an English environment so
            I can community by English fluently.
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
