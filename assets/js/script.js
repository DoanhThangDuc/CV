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

// Component handler
const Form = {
  Navigation() {
    return (
      <div class="navigation">
        <div class="mobie">
          <a class="mobie__logo" href="#intro-link">
            D.T.DUC
          </a>
          <div class="mobie__menuBtn">
            <div class="hamber"></div>
          </div>
          <div class="my__link">
            <a class="heading__about" href="#about-link">
              ABOUT
            </a>
            <a class="heading__works" href="#works-link">
              WORKS
            </a>
            <a class="heading__say_hello" href="#say-hello">
              SAY HELLO
            </a>
          </div>
        </div>
        <div class="heading">
          <a class="desktop heading__intro" href="#intro-link">
            D.T.DUC
          </a>
          <a class="desktop heading__about" href="#about-link">
            ABOUT
          </a>
          <a class="desktop heading__works" href="#works-link">
            WORKS
          </a>
          <a class="desktop heading__say_hello" href="#say-hello">
            SAY HELLO
          </a>
        </div>
      </div>
    );
  },
  Circle() {
    return (
      <div class="circle">
        <span
          class="one__cirle circle-1"
          style={{ width: 100 + "%", height: 100 + "%" }}
        ></span>
        <span
          class="one__cirle circle-2"
          style={{ width: 80 + "%", height: 80 + "%" }}
        ></span>
        <span
          class="one__cirle circle-3"
          style={{ width: 60 + "%", height: 60 + "%" }}
        ></span>
        <span
          class="one__cirle circle-4"
          style={{ width: 40 + "%", height: 40 + "%" }}
        ></span>
        <span
          class="one__cirle circle-5"
          style={{ width: 20 + "%", height: 20 + "%" }}
        ></span>
      </div>
    );
  },
  ContactBar() {
    return (
      <div class="contact__bar">
        <a
          href="https://www.facebook.com/duc.doanh.3597/"
          target="_blank"
          class="facebook"
        >
          FACEBOOK
        </a>
        <a href="https://zalo.me/0367223095" target="_blank" class="youtube">
          ZALO
        </a>
        <a href="" target="_blank" class="twitter">
          TWITTER
        </a>
      </div>
    );
  },
  Introduction() {
    return (
      <div class="introduction">
        <div id="intro-link" style={{ paddingTop: 70 + "px" }}></div>
        <div class="section">
          <div class="hr"></div>
          <p class="feature">HELLO WORLD</p>
          <div class="hr hr-mobie"></div>
        </div>
        <div class="introduction__quote">
          <p>
            I am Duc, <br></br> a Web Developer.
          </p>
        </div>
      </div>
    );
  },
  About() {
    return (
      <div class="about">
        <div class="column-left-about">
          <img
            src="./assets/images/about-photo.jpg"
            id="about-link"
            alt="about-photo"
          ></img>
        </div>
        <div class="column-right-about">
          <div class="about-content">
            <div class="section">
              <div class="hr"></div>
              <p class="feature">ABOUT ME</p>
              <div class="hr hr-mobie"></div>
            </div>
            <p class="Lorem">
              I graduated with an International Economics degree in the Ho Chi
              Minh City Open University, looking for a position in Quality
              System Assistant Staff, as well as problems and solutions within
              the industry. As a person, I am hard working, passionate and
              always curious about problems. As an employee, I am honest,
              responsible, friendly and helpful. I hope I can bring all that to
              contribute toward the development of the Company.
            </p>
            <a href="">
              <div id="dowload-cv" class="feature">
                DOWNLOAD CV
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  },
  ExpertiseBox() {
    return (
      <div class="expertise-box">
        <p class="p1">EXPERTISE</p>
        <p class="p2">HTML, CSS, JavaScript</p>
      </div>
    );
  },
  EduEx() {
    return (
      <div class="edu-ex">
        <p class="p1">EXPERIENCE</p>
        <p class="p1">EDUCATION</p>
      </div>
    );
  },
  ExEdu() {
    return (
      <div class="ex-edu">
        <div class="experience">
          <div class="box-exper-edu">
            <div class="timeline">
              <p class="p3">Open University Ho Chi Minh City</p>
              <p class="p4">International Economics</p>
              <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
            </div>
            <p class="p-content">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
              consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
              quis velit esse sed Ut proident cupidatat nulla esse cillum
              laborum occaecat nostrud sit dolor incididunt amet est occaecat
              nisi.
            </p>
          </div>

          <div class="box-exper-edu">
            <div class="timeline">
              <p class="p3">Open University Ho Chi Minh City</p>
              <p class="p4">International Economics</p>
              <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
            </div>
            <p class="p-content">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
              consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
              quis velit esse sed Ut proident cupidatat nulla esse cillum
              laborum occaecat nostrud sit dolor incididunt amet est occaecat
              nisi.
            </p>
          </div>
        </div>
        <div class="ex__edu-mobie">
          <div class="ex__edu-mobie-experience">
            <p class="p1">EXPERIENCE</p>
            <div class="box-exper-edu">
              <div class="timeline">
                <p class="p3">Open University Ho Chi Minh City</p>
                <p class="p4">International Economics</p>
                <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
              </div>
              <p class="p-content">
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>

            <div class="box-exper-edu">
              <div class="timeline">
                <p class="p3">Open University Ho Chi Minh City</p>
                <p class="p4">International Economics</p>
                <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
              </div>
              <p class="p-content">
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>

          <div class="ex__edu-mobie-education">
            <p class="p1">EDUCATION</p>
            <div class="box-exper-edu">
              <div class="timeline">
                <p class="p3">Open University Ho Chi Minh City</p>
                <p class="p4">International Economics</p>
                <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
              </div>
              <p class="p-content">
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
            <div class="box-exper-edu">
              <div class="timeline">
                <p class="p3">Open University Ho Chi Minh City</p>
                <p class="p4">International Economics</p>
                <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
              </div>
              <p class="p-content">
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>
        </div>
        <div class="education">
          <div class="box-exper-edu">
            <div class="timeline">
              <p class="p3">Open University Ho Chi Minh City</p>
              <p class="p4">International Economics</p>
              <p class="p5">OCTOBER 2017 - OCTOBER 2022</p>
            </div>
            <p class="p-content">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
              consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
              quis velit esse sed Ut proident cupidatat nulla esse cillum
              laborum occaecat nostrud sit dolor incididunt amet est occaecat
              nisi.
            </p>
          </div>

          <div class="box-exper-edu">
            <div class="timeline">
              <p class="p3">Dropbox</p>
              <p class="p4">Product Designer</p>
              <p class="p5">AUGUST 2019 - PRESENT</p>
            </div>
            <p class="p-content">
              Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
              consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
              quis velit esse sed Ut proident cupidatat nulla esse cillum
              laborum occaecat nostrud sit dolor incididunt amet est occaecat
              nisi.
            </p>
          </div>
        </div>
      </div>
    );
  },
  RecentWork() {
    return (
      <div class="recentwork">
        <div class="section">
          <div class="hr"></div>
          <p class="feature" id="works-link">
            PROJECTS
          </p>
          <div class="hr hr-mobie"></div>
        </div>
        <p class="p2">
          Here are some of my favorite projects I have done lately. Feel free to
          check them out.
        </p>
      </div>
    );
  },
  Projects() {
    return (
      <div class="projects">
        <div class="column-left-works">
          <div class="project project-1">
            <div class="work-image">
              <img
                src="./assets/images/sun-flowers.jpg"
                alt="company-logo"
              ></img>
            </div>
            <a href="">
              <div class="work-content">
                <div class="hoverMTop button"></div>
                <p class="p5">website</p>
                <p class="p4">company name</p>
              </div>
            </a>
          </div>

          <div class="project project-2">
            <div class="work-image">
              <img
                src="./assets/images/sun-flowers.jpg"
                alt="company-logo"
              ></img>
            </div>
            <a href="">
              <div class="work-content">
                <p class="p5">website</p>
                <p class="p4">company name</p>
              </div>
            </a>
          </div>

          <div class="project project-3">
            <div class="work-image">
              <img
                src="./assets/images/sun-flowers.jpg"
                alt="company-logo"
              ></img>
            </div>
            <a href="">
              <div class="work-content">
                <p class="p5">website</p>
                <p class="p4">company name</p>
              </div>
            </a>
          </div>
        </div>
        <div class="column-right-works">
          <div class="project project-4">
            <div class="work-image">
              <img
                src="./assets/images/sun-flowers.jpg"
                alt="company-logo"
              ></img>
            </div>
            <a href="">
              <div class="work-content">
                <p class="p5">website</p>
                <p class="p4">company name</p>
              </div>
            </a>
          </div>

          <div class="project project-5">
            <div class="work-image">
              <img
                src="./assets/images/sun-flowers.jpg"
                alt="company-logo"
              ></img>
            </div>
            <a href="">
              <div class="work-content">
                <p class="p5">website</p>
                <p class="p4">company name</p>
              </div>
            </a>
          </div>

          <div class="project project-6">
            <div class="work-image">
              <img
                src="./assets/images/sun-flowers.jpg"
                alt="company-logo"
              ></img>
            </div>
            <a href="">
              <div class="work-content">
                <p class="p5">website</p>
                <p class="p4">company name</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  },
  Comment() {
    return (
      <div class="comment">
        <div class="left-comment">
          <div class="one-comment">
            <div class="head-comment">
              <div class="person-comment-img">
                <img src="./assets/images/sun-flowers.jpg" alt="person"></img>
              </div>
              <div class="person-comment-role">
                <p class="p7">Name</p>
                <p class="p8">role</p>
              </div>
            </div>
            <div class="person-comment-quote">
              Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.
              Voluptas tempore rem. Explicabo a quaerat sint autem dolore
              ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil
              nostrum. Laudantium quia consequatur molestias delectus culpa.
            </div>
          </div>
        </div>
        <div class="right-comment">
          <div class="one-comment">
            <div class="head-comment">
              <div class="person-comment-img">
                <img src="./assets/images/sun-flowers.jpg" alt="person"></img>
              </div>
              <div class="person-comment-role">
                <p class="p7">Name</p>
                <p class="p8">role</p>
              </div>
            </div>
            <div class="person-comment-quote">
              Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.
              Voluptas tempore rem. Explicabo a quaerat sint autem dolore
              ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil
              nostrum. Laudantium quia consequatur molestias delectus culpa.
            </div>
          </div>
        </div>
      </div>
    );
  },
  SayHello() {
    return (
      <div class="say-hello">
        <div class="expertise-box">
          <div class="section" id="say-hello" style={{ paddingTop: 70 + "px" }}>
            <div class="hr"></div>
            <p class="feature">REACH ME</p>
            <div class="hr hr-mobie"></div>
          </div>
          <p class="p2">
            I love to hear from you. Whether you have a question or just want to
            chat about design, tech and art — shoot me a message.
          </p>
        </div>

        <div class="contact">
          <div class="reach-me-at">
            <p class="p1 contact-p1">REACH ME AT</p>
            <p class="p10">sayhello@luther.com</p>
            <p class="p10">+197 543 2345</p>
          </div>
          <div class="social">
            <p class="p1 contact-p1">REACH ME AT</p>
            <p class="p10">sayhello@luther.com</p>
            <p class="p10">+197 543 2345</p>
          </div>
          <a href="" id="dowload-cv" class="feature">
            SAY HELLO.
          </a>
        </div>
      </div>
    );
  },
  End() {
    return <div class="end"></div>;
  },
};

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
      <Form.Navigation />
      <Form.Circle />
      <Form.ContactBar />
      <Form.Introduction />
      <Form.About />
      <Form.ExpertiseBox />
      <Form.EduEx />
      <Form.ExEdu />
      <Form.RecentWork />
      <Form.Projects />
      <Form.Comment />
      <Form.SayHello />
      <Form.End />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
