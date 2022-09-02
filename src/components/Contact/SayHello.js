import React from "react";
import { P1 } from "../ExpertiseBox/ExpertiseBox.styled.js";
import { P2 } from "../ExpertiseBox/ExpertiseBox.styled.js";
import { StyledButton } from "../styles/Button.styled.js";
import {
  StyledSayHello,
  Contact,
  StyledReachMe,
  Infor,
} from "../Contact/SayHello.styled.js";
import Expertise from "./Expertise.js";
const reachInfo = [
  {
    email: "doanhthangduc2802@gmail.com",
    emailHref: "mailto:doanhthangduc2802@gmail.com",
    tel: "+84 36 722 3095",
    telHref: "tel:0367223095",
  },
];
function SayHello() {
  return (
    <StyledSayHello>
      <Expertise></Expertise>
      <Contact>
        {reachInfo.map((info) => {
          return (
            <StyledReachMe key={info.emailHref}>
              <P1>REACH ME AT</P1>
              <Infor>
                <a href={info.emailHref} target="_blank">
                  {info.email}
                </a>
                <a href={info.telHref}>{info.tel}</a>
              </Infor>
            </StyledReachMe>
          );
        })}
        <StyledButton href="" id="dowload-cv" style={{ width: "50vw" }}>
          <a href="https://zalo.me/0367223095" target="_blank">
            Say Hello.
          </a>
        </StyledButton>
      </Contact>
    </StyledSayHello>
  );
}

export default SayHello;
