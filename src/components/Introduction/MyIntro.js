import React from "react";
import "./MyIntro.css";

function MyIntro() {
  const openResumeHandler = () => {
    window.open(
      "https://drive.google.com/file/d/1LBESj2QP20t7CL8R-Eg4U1-kQBW4x02P/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="myinrto-container">
      <h1 className="myintro-text">
        Hi, I am <span className="magic">Suhaan Yagati Mat</span>.
      </h1>
      <h3 className="myintro-text myintro-sub">
        Jack of all trades. Some of the cards i've previously dealt with
        include, <span className="magic-blue">Software</span>
        {" , "}
        <span className="magic-blue">Interface</span>, and{" "}
        <span className="magic-blue">Platform</span> Engineer.
      </h3>
      <p className=" myintro-text myintro-con">
      💻 I specialize in crafting end-to-end solutions with Python, Java, and AWS, and have a strong track record in full-stack development,
      DevOps, and scalable system design. I thrive in environments where I can architect smart solutions, automate workflows, and push code that matters.
      Always curious, always building. Feel free to explore my portfolio to see the projects and tools.
      I’ve worked with, spanning web development, cloud services, and intelligent systems.

      </p>
      {/* <h3>A cutting-edge software engineer currently at <a href="https://www.veryableops.com/">Veryable Inc.</a>, passionately delving into the realms of scalability, cloud infrastructure, streamlined pipelines, and agile configurations.</h3> */}
      <button className="fancyButton" onClick={openResumeHandler}>
        <span className="magic">Resume</span>
      </button>
    </div>
  );
}

export default MyIntro;


