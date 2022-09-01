import {
  StyledInForContainer,
  Timeline,
  Content,
  P3,
  P4,
  P5,
} from "./InForContainer.styled";
import { StyledEducation } from "./Education.styled.js";
import { personalEdu } from "../persionalInfoData";

function Education() {
  return (
    <StyledEducation>
      {personalEdu.map((exp) => {
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
    </StyledEducation>
  );
}
export default Education;
