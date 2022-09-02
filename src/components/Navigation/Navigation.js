import { useState, useEffect } from "react";
import { Header, NavigationStyled } from "./Navigation.styled";
import NavigationMobile from "./NavigationMobile";

const headingLinks = [
  {
    id: 1,
    name: "D.T.DUC",
    href: "#intro-link",
  },
  {
    id: 2,
    name: "ABOUT",
    href: "#about-link",
  },
  {
    id: 3,
    name: "WORKS",
    href: "#works-link",
  },
  {
    id: 4,
    name: "SAY HELLO",
    href: "#say-hello",
  },
];
function Navigation() {
  const [activePosition, setActivePosition] = useState(1);

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
    <NavigationStyled>
      <NavigationMobile></NavigationMobile>
      <Header>
        {headingLinks.map((link) => {
          return (
            <a
              style={{
                backgroundColor: activePosition == link.id && "#4c4949",
              }}
              key={link.id}
              href={link.href}
            >
              {link.name}
            </a>
          );
        })}
      </Header>
    </NavigationStyled>
  );
}
export default Navigation;
