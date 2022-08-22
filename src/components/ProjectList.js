function ProjectList(arr) {
  const projects = arr.props;

  return projects.map((project) => {
    return (
      <div className={project.className} key={project.className}>
        <div className="work-image">
          <img src={project.src} alt="company-logo"></img>
        </div>
        <a href="">
          <div className="work-content">
            <p className="p5">website</p>
            <p className="p4">company name</p>
          </div>
        </a>
      </div>
    );
  });
}

export default ProjectList;
