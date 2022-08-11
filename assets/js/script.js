// making close and open navigation

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBtn = $(".mobie__menuBtn");
const openMobieNav = $(".my__link");
const headingLinks = $$(".heading a");
const headingIntro = $(".desktop.heading__intro");
const headingAbout = $(".desktop.heading__about");
const headingWorks = $(".desktop.heading__works");
const headingSayHello = $(".desktop.heading__say_hello");

console.log(headingIntro, headingAbout, headingWorks, headingSayHello);
const app = {
  // handle events
  handleEvent: function () {
    // handle navigation scrollY events
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
  },
  start: function () {
    this.handleEvent();
  },
};
app.start();
