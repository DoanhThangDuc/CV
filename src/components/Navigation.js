import { useState, useEffect } from "react";

function Navigation() {
  const [activePosition, setActivePosition] = useState(1);
  const [isMobileNavExpand, setMobileNavExpand] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (0 <= position && position < 860) {
      return setActivePosition(1);
    }
    if (860 <= position && position < 3358) {
      return setActivePosition(2);
    }
    if (3358 <= position && position < 4640) {
      return setActivePosition(3);
    }
    return setActivePosition(4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activePosition]);

  return (
    <div className="navigation">
      <div className="mobie">
        <a className="mobie__logo" href="#intro-link">
          D.T.DUC
        </a>
        <div
          //mobie__menuBtn
          className={isMobileNavExpand ? "mobie__menuBtn open" : "mobie__menuBtn"}
          onClick={() => {
            setMobileNavExpand(!isMobileNavExpand);
          }}
        >
          <div className="hamber"></div>
        </div>
        {isMobileNavExpand && (
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
        )}
      </div>
      // desktop heading__intro
      <div className="heading">
        <a
          className={
            activePosition === 1
              ? "desktop heading__intro active"
              : "desktop heading__intro"
          }
          href="#intro-link"
        >
          D.T.DUC
        </a>
        <a
          className={
            activePosition === 2
              ? "desktop heading__about active"
              : "desktop heading__about"
          }
          href="#about-link"
        >
          ABOUT
        </a>
        <a
          className={
            activePosition === 3
              ? "desktop heading__works active"
              : "desktop heading__works"
          }
          href="#works-link"
        >
          WORKS
        </a>
        <a
          className={
            activePosition === 4
              ? "desktop heading__say_hello active"
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
