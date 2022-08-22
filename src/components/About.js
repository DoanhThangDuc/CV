function About() {
  return (
    <div className="about">
      <div className="column-left-about">
        <img
          src="./assets/images/about-photo.jpg"
          id="about-link"
          alt="about"
        ></img>
      </div>
      <div className="column-right-about">
        <div className="about-content">
          <div className="section">
            <div className="hr"></div>
            <p className="feature">ABOUT ME</p>
            <div className="hr hr-mobie"></div>
          </div>
          <p className="Lorem">
            I graduated with an International Economics degree in the Ho Chi
            Minh City Open University, looking for a position in Quality System
            Assistant Staff, as well as problems and solutions within the
            industry. As a person, I am hard working, passionate and always
            curious about problems. As an employee, I am honest, responsible,
            friendly and helpful. I hope I can bring all that to contribute
            toward the development of the Company.
          </p>
          <a href="">
            <div id="dowload-cv" className="feature">
              DOWNLOAD CV
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
