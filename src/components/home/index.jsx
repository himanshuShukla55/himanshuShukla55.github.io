import React from "react";
import { AiFillFolder } from "react-icons/ai";
import "./index.scss";

const Home = () => {
  return (
    <div id="home">
      <div id="terminal-header">
        <div id="buttons">
          <button id="red"></button>
          <button id="yellow"></button>
          <button id="green"></button>
        </div>
        <span>
          <AiFillFolder
            style={{ height: "2em", width: "2em", color: "#48CBF8" }}
          />
          <h3>_Himanshu's termial</h3>
        </span>
      </div>
      <div id="user-detail-intro">
        <h1 className="typing">
          {`>`}
          <span>Hello World!</span>
        </h1>
        <p id="welcome-msg">
          {`>Welcome to my`} <span>Portfolio</span>.
        </p>
        <p id="user-detail-name">
          {`>I'm `}
          <span>Himanshu Shukla</span>
          {`, a Full Stack Developer!`}
        </p>
      </div>
    </div>
  );
};

export default Home;
