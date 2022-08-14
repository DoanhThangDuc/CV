import "./App.css";
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

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBtn = $(".mobie__menuBtn");
const openMobieNav = $(".my__link");
const headingLinks = $$(".heading a");
const headingIntro = $(".desktop.heading__intro");
const headingAbout = $(".desktop.heading__about");
const headingWorks = $(".desktop.heading__works");
const headingSayHello = $(".desktop.heading__say_hello");

function App() {
  // handle navigation scrollY events
  function handleNavScrollY() {
    headingIntro.classList.add("scrollToHeading");
    window.onscroll = function () {
      let scrollValue =
        window.scrollY || document.documentElement.scrollTop || 0;
      if (scrollValue <= 772) {
        headingIntro.classList.add("scrollToHeading");
      } else {
        headingIntro.classList.remove("scrollToHeading");
      }
      if (scrollValue > 772 && scrollValue <= 3269) {
        headingAbout.classList.add("scrollToHeading");
      } else {
        headingAbout.classList.remove("scrollToHeading");
      }
      if (scrollValue > 3269 && scrollValue <= 4550) {
        headingWorks.classList.add("scrollToHeading");
      } else {
        headingWorks.classList.remove("scrollToHeading");
      }
      if (scrollValue > 4550) {
        headingSayHello.classList.add("scrollToHeading");
      } else {
        headingSayHello.classList.remove("scrollToHeading");
      }
    };
  }

  // handle render
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
