import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs, TbBrandRedux } from "react-icons/tb";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJirasoftware,
  SiMongodb,
} from "react-icons/si";
import { FaCss3Alt, FaGithub, FaHtml5, FaSass } from "react-icons/fa";
import "./index.scss";

const Skills = () => {
  return (
    <div id="skills">
      <h1>My Skills</h1>
      <div id="skills-container">
        <div className="skills-card">
          <RiReactjsLine className="skills-card-image react" />
          <h2 className="skills-card-name">React</h2>
        </div>
        <div className="skills-card">
          <TbBrandRedux className="skills-card-image redux" />
          <h2 className="skills-card-name">Redux</h2>
        </div>
        <div className="skills-card">
          <SiExpress className="skills-card-image" />
          <h2 className="skills-card-name">Express</h2>
        </div>
        <div className="skills-card">
          <TbBrandNodejs className="skills-card-image node" />
          <h2 className="skills-card-name">Node Js</h2>
        </div>
        <div className="skills-card">
          <SiFirebase className="skills-card-image firebase" />
          <h2 className="skills-card-name">Firebase</h2>
        </div>
        <div className="skills-card">
          <SiMongodb className="skills-card-image mongodb" />
          <h2 className="skills-card-name">MongoDB</h2>
        </div>
        <div className="skills-card">
          <FaSass className="skills-card-image sass" />
          <h2 className="skills-card-name">Sass</h2>
        </div>
        <div className="skills-card">
          <SiJavascript className="skills-card-image javascript" />
          <h2 className="skills-card-name">Javascript</h2>
        </div>
        <div className="skills-card">
          <FaCss3Alt className="skills-card-image css" />
          <h2 className="skills-card-name">CSS</h2>
        </div>
        <div className="skills-card">
          <FaHtml5 className="skills-card-image html" />
          <h2 className="skills-card-name">HTML</h2>
        </div>
        <div className="skills-card">
          <FaGithub className="skills-card-image" />
          <h2 className="skills-card-name">Github</h2>
        </div>
        <div className="skills-card">
          <SiJirasoftware className="skills-card-image jira" />
          <h2 className="skills-card-name">JIRA</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
