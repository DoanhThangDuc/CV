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
    <div className="projects">
      <div className="column-left-works">
        {projectsLeft.map((projects) => {
          return (
            <div className={projects.className} key={projects.id}>
              <div className="work-image">
                <img src={projects.src} alt="company-logo"></img>
              </div>
              <a href="">
                <div className="work-content">
                  <p className="p5">website</p>
                  <p className="p4">company name</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <div className="column-right-works">
        {projectsRight.map((projects) => {
          return (
            <div className={projects.className} key={projects.id}>
              <div className="work-image">
                <img src={projects.src} alt="company-logo"></img>
              </div>
              <a href="">
                <div className="work-content">
                  <p className="p5">website</p>
                  <p className="p4">company name</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
