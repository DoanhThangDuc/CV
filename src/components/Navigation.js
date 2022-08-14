function Navigation() {
  return (
    <div className="navigation">
      <div className="mobie">
        <a className="mobie__logo" href="#intro-link">
          D.T.DUC
        </a>
        <div className="mobie__menuBtn">
          <div className="hamber"></div>
        </div>
        <div className="my__link">
          <a className="heading__about" href="#about-link">
            ABOUT
          </a>
          <a className="heading__works" href="#works-link">
            WORKS
          </a>
          <a className="heading__say_hello" href="#say-hello">
            SAY HELLO
          </a>
        </div>
      </div>
      <div className="heading">
        <a className="desktop heading__intro" href="#intro-link">
          D.T.DUC
        </a>
        <a className="desktop heading__about" href="#about-link">
          ABOUT
        </a>
        <a className="desktop heading__works" href="#works-link">
          WORKS
        </a>
        <a className="desktop heading__say_hello" href="#say-hello">
          SAY HELLO
        </a>
      </div>
    </div>
  );
}
export default Navigation;
