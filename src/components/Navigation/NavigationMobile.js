import { useState } from "react";

import {
  NavMobile,
  HambergerContainer,
  HambergerBar,
  HambergerBarOpening,
  NavMobileLogo,
  LinkContainer,
  Link,
} from "./NavigationMobile.styled.js";
export default function NavigationMobile() {
  const [isMobileNavExpand, setMobileNavExpand] = useState(false);
  return (
    <NavMobile>
      <NavMobileLogo href="#intro-link">D.T.DUC</NavMobileLogo>
      <HambergerContainer
        onClick={() => {
          setMobileNavExpand(!isMobileNavExpand);
        }}
      >
        {(isMobileNavExpand) ? (
          <HambergerBarOpening></HambergerBarOpening>
        ) : (
          <HambergerBar></HambergerBar>
        )}
      </HambergerContainer>
      {isMobileNavExpand && (
        <LinkContainer
        >
          <Link href="#about-link">ABOUT</Link>
          <Link href="#works-link">WORKS</Link>
          <Link href="#say-hello">SAY HELLO</Link>
        </LinkContainer>
      )}
    </NavMobile>
  );
}
