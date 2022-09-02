import { SectionBar } from "../styles/SectionBar.styled";
import {
  StyledRecentWork,
  P2,
} from "./RecentWork.styled.js";
function RecentWork() {
  return (
    <StyledRecentWork>
      <SectionBar>
        <p
          id="works-link"
          style={{ padding: "6rem 2rem 0 2rem", fontSize: "1.5rem" }}
        >
          PROJECTS
        </p>
      </SectionBar>
      <P2>
        Here are some of my favorite projects I have done lately. Feel free to
        check them out.
      </P2>
    </StyledRecentWork>
  );
}
export default RecentWork;
