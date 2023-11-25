import React from "react";
import { Link } from "react-router-dom";
import Resume from "../../assets/Resume.pdf";

import "./index.scss";
import { downloadResume } from "../../utils";

const About = () => {
  return (
    <div id="about" className="about section">
      <img className="home-img" src={require("./myPic.png")} alt="himanshu" />
      <div id="user-detail-intro">
        <h1>About Me:</h1>
        <p>
          I am a skilled and passionate{" "}
          <span className="yellow">Full Stack Web Developer</span>. With a
          strong foundation in both <span className="yellow">front-end</span>{" "}
          and
          <span className="yellow">back-end</span> development, I bring a wealth
          of <span className="yellow">experience</span> and{" "}
          <span className="yellow">expertise</span> to the table. My commitment
          to staying up-to-date with the{" "}
          <span className="yellow">
            latest industry trends and technologies
          </span>{" "}
          ensures that I deliver{" "}
          <span className="yellow">cutting-edge websites and applications</span>
          .
        </p>

        <Link
          id="resume-button-2"
          to={Resume}
          download="Resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={downloadResume}
        >
          My Resume
        </Link>
      </div>
    </div>
  );
};

export default About;
