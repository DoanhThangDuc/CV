import ProjectList from "./ProjectList";
import {
  StyledProjectsContainer,
  ColumnWork,
  
} from "./Projects.styled.js";
function Projects() {
  const projectsLeft = [
    {
      id: 1,
      className: "project project-1",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      id: 2,
      className: "project project-2",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      id: 3,
      className: "project project-3",
      src: "./assets/images/sun-flowers.jpg",
    },
  ];
  const projectsRight = [
    {
      id: 4,
      className: "project project-4",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      id: 5,
      className: "project project-5",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      id: 6,
      className: "project project-6",
      src: "./assets/images/sun-flowers.jpg",
    },
  ];

  return (
    <StyledProjectsContainer>
      <ColumnWork>
        <ProjectList props={projectsLeft}></ProjectList>
      </ColumnWork>

      <ColumnWork>
        <ProjectList props={projectsRight}></ProjectList>
      </ColumnWork>
    </StyledProjectsContainer>
  );
}
export default Projects;
