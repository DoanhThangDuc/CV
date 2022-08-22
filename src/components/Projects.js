import ProjectList from "./ProjectList";

function Projects() {
  const projectsLeft = [
    {
      className: "project project-1",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      className: "project project-2",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      className: "project project-3",
      src: "./assets/images/sun-flowers.jpg",
    },
  ];
  const projectsRight = [
    {
      className: "project project-4",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      className: "project project-5",
      src: "./assets/images/sun-flowers.jpg",
    },
    {
      className: "project project-6",
      src: "./assets/images/sun-flowers.jpg",
    },
  ];

  return (
    <div className="projects">
      <div className="column-left-works">
        <ProjectList props={projectsLeft}></ProjectList>
      </div>

      <div className="column-right-works">
        <ProjectList props={projectsRight}></ProjectList>
      </div>
    </div>
  );
}
export default Projects;
