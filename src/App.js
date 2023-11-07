import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
