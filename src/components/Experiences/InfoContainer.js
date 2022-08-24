import {
  StyledInForContainer,
  Timeline,
  Content,
  P3,
  P4,
  P5,
} from "./InForContainer.styled";

import { memo } from "react";
// function test({ data }) {
//   console.log(data);
//   console.log(1);
//   return (
//     <>
//       {data.map((epx) => {
//         console.log(2);

//         return (
//           <div className="box-exper-edu" key={epx.name}>
//             <div className="timeline">
//               <p className="p3">{epx.schoolName}</p>
//               <p className="p4">{epx.major}</p>
//               <p className="p5">{epx.period}</p>
//             </div>
//             <p className="p-content">{epx.context}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }
function InForContainer(data) {
  return (
    <StyledInForContainer>
      <Timeline>
        <P3>Open University Ho Chi Minh City</P3>
        <P4>International Economics</P4>
        <P5>OCTOBER 2017 - OCTOBER 2022</P5>
      </Timeline>
      <Content>
        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
        consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis
        velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat
        nostrud sit dolor incididunt amet est occaecat nisi.
      </Content>
    </StyledInForContainer>
  );
}
export default memo(InForContainer);
