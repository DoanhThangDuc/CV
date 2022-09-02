import { P1, P2 } from "../ExpertiseBox/ExpertiseBox.styled.js";

import { StyledExpertiseBox } from "../Contact/SayHello.styled.js";

export default function Expertise() {
  return (
    <StyledExpertiseBox>
      <div id="say-hello">
        <P1 className="feature" style={{ padding: "10vh 0  4vh 4vw" }}>
          REACH ME
        </P1>
      </div>
      <P2
        style={{ color: "white", fontWeight: "500", padding: " 0 4vh 20vh " }}
      >
        I love to hear from you. Whether you have a question or just want to
        chat about design, tech and art — shoot me a message.
      </P2>
    </StyledExpertiseBox>
  );
}
