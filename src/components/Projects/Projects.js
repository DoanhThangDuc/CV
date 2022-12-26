import ProjectList from "./ProjectList";
import {
  StyledProjectsContainer,
  ColumnWork,
  
} from "./Projects.styled.js";
function Projects() {
  const projectsLeft = [
    {
      id: 1,
      image: "./assets/images/sun-flowers.jpg",
      link: "https://github.com/DoanhThangDuc/blog",
      website: "GitHub",
      name: "Blog App",
    },
    {
      id: 2,
      image: "./assets/images/sun-flowers.jpg",
      link: "https://github.com/DoanhThangDuc/CV",
      website: "GitHub",
      name: "CV",
    },
    {
      id: 3,
      image: "./assets/images/sun-flowers.jpg",
      link: "https://github.com/DoanhThangDuc/todo",
      website: "GitHub",
      name: "To Do App",
    },
  ];
  const projectsRight = [
    {
      id: 4,
      image: "./assets/images/sun-flowers.jpg",
      link: "https://github.com/DoanhThangDuc/blog",
      website: "GitHub",
      name: "Blog App",
    },
    {
      id: 5,
      image: "./assets/images/sun-flowers.jpg",
      link: "https://github.com/DoanhThangDuc/CV",
      website: "GitHub",
      name: "CV",
    },
    {
      id: 6,
      image: "./assets/images/sun-flowers.jpg",
      link: "https://github.com/DoanhThangDuc/todo",
      website: "GitHub",
      name: "To Do App",
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
