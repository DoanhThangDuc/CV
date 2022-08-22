import "./App.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Navigation from "./components/Navigation";
import Circle from "./components/Circle";
import ContactBar from "./components/ContactBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import ExpertiseBox from "./components/ExpertiseBox";
import EduEx from "./components/EduEx";
import ExEdu from "./components/ExEdu";
import RecentWork from "./components/RecentWork";
import Projects from "./components/Projects";
import Comment from "./components/Comment";
import SayHello from "./components/SayHello";
import End from "./components/End";

//background: #4c4949

function App() {
  

  // use div classList, useEffect, useRef

  return (
    <div className="cv-web">
      <Navigation />
      <Circle />
      <ContactBar />
      <Introduction />
      <About />
      <ExpertiseBox />
      <EduEx />
      <ExEdu />
      <RecentWork />
      <Projects />
      <Comment />
      <SayHello />
      <End />
    </div>
  );
}

export default App;
