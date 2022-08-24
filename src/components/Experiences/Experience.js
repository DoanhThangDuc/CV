import InForContainer from "./InfoContainer";
import { personalExp } from "../persionalInfoData";
import { StyledExperience } from "./Experience.styled.js";
function Experience() {
  return (
    <StyledExperience>
      <InForContainer data={personalExp}></InForContainer>
      <InForContainer></InForContainer>
    </StyledExperience>
  );
}
export default Experience;
