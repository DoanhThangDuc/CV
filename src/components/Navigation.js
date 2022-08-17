import { useState, useEffect } from "react";

function Navigation() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const position = window.scrollY;
    //0 860  3358 4640
    if (0 <= position && position < 860) {
      return setOpacity(1);
    }
    if (860 <= position && position < 3358) {
      return setOpacity(2);
    }
    if (3358 <= position && position < 4640) {
      return setOpacity(3);
    }
    return setOpacity(4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacity]);
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
      // desktop heading__intro
      <div className="heading">
        <a
          className={
            opacity === 1
              ? "desktop heading__intro scrollToHeading"
              : "desktop heading__intro"
          }
          href="#intro-link"
        >
          D.T.DUC
        </a>
        <a
          className={
            opacity === 2
              ? "desktop heading__about scrollToHeading"
              : "desktop heading__about"
          }
          href="#about-link"
        >
          ABOUT
        </a>
        <a
          className={
            opacity === 3
              ? "desktop heading__works scrollToHeading"
              : "desktop heading__works"
          }
          href="#works-link"
        >
          WORKS
        </a>
        <a
          className={
            opacity === 4
              ? "desktop heading__say_hello scrollToHeading"
              : "desktop heading__say_hello"
          }
          href="#say-hello"
        >
          SAY HELLO
        </a>
      </div>
    </div>
  );
}
export default Navigation;
