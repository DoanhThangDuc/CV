import Experience from "./Experience";
import Education from "./Education";
import ExEduMobile from "./ExEduMobile";
import { StyledPersionalInfo } from "../PersionalInfo/PersionalInfo.styled.js";

function PersionalInfo() {
  return (
    <StyledPersionalInfo>
      <Experience></Experience>
      <Education></Education>
      <ExEduMobile></ExEduMobile>
    </StyledPersionalInfo>
  );
}

export default PersionalInfo;
