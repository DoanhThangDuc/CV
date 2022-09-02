import {
  StyledInForContainer,
  Timeline,
  Content,
  P3,
  P4,
  P5,
} from "./InForContainer.styled";
import { personalExp } from "../persionalInfoData";
import { StyledExperience } from "./Experience.styled.js";
function Experience() {
  return (
    <StyledExperience>
      {personalExp.map((exp) => {
        return (
          <StyledInForContainer key={exp.id}>
            <Timeline>
              <P3>{exp.company}</P3>
              <P4>{exp.work}</P4>
              <P5>{exp.period}</P5>
            </Timeline>
            <Content>
              <ul>
                {exp.context.map((content) => {
                  return <li key={content}>{content}</li>;
                })}
              </ul>
            </Content>
          </StyledInForContainer>
        );
      })}
    </StyledExperience>
  );
}
export default Experience;
