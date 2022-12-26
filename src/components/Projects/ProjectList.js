import { StyledProjectImg, Content } from "./ProjectList.styled.js";
import { P4, P5 } from "../Experiences/InForContainer.styled";
import { StyledProject } from "./Projects.styled.js";

function ProjectList(arr) {
  const projects = arr.props;
  console.log(projects);
  return projects.map((project) => {
    return (
      <StyledProject key={project.id} href={project.link} target="_blank">
        <StyledProjectImg src={project.image} alt="company-logo" />
        <a href="#">
          <Content>
            <P5>{project.website}</P5>
            <P4>{project.name}</P4>
          </Content>
        </a>
      </StyledProject>
    );
  });
}

export default ProjectList;
