import React from "react";
import { P1 } from "../ExpertiseBox/ExpertiseBox.styled.js";
import { P2 } from "../ExpertiseBox/ExpertiseBox.styled.js";
import { StyledButton } from "../styles/Button.styled.js";
import {
  StyledSayHello,
  Contact,
  StyledReachMe,
  P10,
  Social,
} from "../Contact/SayHello.styled.js";
import Expertise from "./Expertise.js";
function SayHello() {
  return (
    <StyledSayHello>
      <Expertise></Expertise>
      <Contact>
        <StyledReachMe>
          <P1>REACH ME AT</P1>
          <a
            className="p10"
            href="mailto:doanhthangduc2802@gmail.com"
            target="_blank"
          >
            doanhthangduc2802@gmail.com
          </a>
          <p className="p10">+84 36 722 3095 </p>
        </StyledReachMe>
        <StyledReachMe>
          <P1>REACH ME AT</P1>
          <a
            className="p10"
            href="mailto:doanhthangduc2802@gmail.com"
            target="_blank"
          >
            doanhthangduc2802@gmail.com
          </a>
          <p className="p10"> +84 36 722 3095</p>
        </StyledReachMe>
        <StyledButton href="" id="dowload-cv" style={{ width: "20vw" }}>
          <p>Say Hello.</p>
        </StyledButton>
      </Contact>
    </StyledSayHello>
  );
}

export default SayHello;
