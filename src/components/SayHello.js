import React from "react";

function SayHello() {
  return (
    <div className="say-hello">
      <div className="expertise-box">
        <div
          className="section"
          id="say-hello"
          style={{ paddingTop: 70 + "px" }}
        >
          <div className="hr"></div>
          <p className="feature">REACH ME</p>
          <div className="hr hr-mobie"></div>
        </div>
        <p className="p2">
          I love to hear from you. Whether you have a question or just want to
          chat about design, tech and art — shoot me a message.
        </p>
      </div>

      <div className="contact">
        <div className="reach-me-at">
          <p className="p1 contact-p1">REACH ME AT</p>
          <a
            className="p10"
            href="mailto:doanhthangduc2802@gmail.com"
            target="_blank"
          >
            doanhthangduc2802@gmail.com
          </a>
          <p className="p10">+84 36 722 3095 </p>
        </div>
        <div className="social">
          <p className="p1 contact-p1">REACH ME AT</p>
          <a
            className="p10"
            href="mailto:doanhthangduc2802@gmail.com"
            target="_blank"
          >
            doanhthangduc2802@gmail.com
          </a>
          <p className="p10"> +84 36 722 3095</p>
        </div>
        <a href="" id="dowload-cv" className="feature">
          SAY HELLO.
        </a>
      </div>
    </div>
  );
}

export default SayHello;
