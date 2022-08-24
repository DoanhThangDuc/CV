import { StyledProjectImg, Content } from "./ProjectList.styled.js";
import { P4, P5 } from "../Experiences/InForContainer.styled";
import { StyledProject } from "./Projects.styled.js";
function ProjectList(arr) {
  const projects = arr.props;

  return projects.map((project) => {
    return (
      <StyledProject key={project.id}>
        <StyledProjectImg src={project.src} alt="company-logo" />
        <a href="#">
          <Content>
            <P5>website</P5>
            <P4>company name</P4>
          </Content>
        </a>
      </StyledProject>
    );
  });
}

export default ProjectList;
