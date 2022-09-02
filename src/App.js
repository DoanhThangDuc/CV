import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Circle from "./components/Circle/Circle";
import ContactBar from "./components/ContactBar/ContactBar";
import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import ExpertiseBox from "./components/ExpertiseBox/ExpertiseBox.js";
import ExSections from "./components/ExSections/ExSections";
import PersionalInfo from "./components/Experiences/PersionalInfo.js";
import RecentWork from "./components/RecentWork/RecentWork";
import Projects from "./components/Projects/Projects";
import SayHello from "./components/Contact/SayHello";
import End from "./components/ExpertiseBox/End";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Comments from "./components/Comment/Comment";
const theme = {
  colors: {
    header: "#edfbff",
    body: "#141516",
    footer: "#003333",
  },
  mobile: "46.1875em",
  tablet: "63.9375em",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navigation />
        <Circle />
        <ContactBar />
        <Introduction />
        <About />
        <ExpertiseBox />
        <ExSections />
        <PersionalInfo />
        <RecentWork />
        <Projects />
        <Comments />
        <SayHello />
        <End />
      </>
    </ThemeProvider>
  );
}

export default App;
