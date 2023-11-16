import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Resume from "../../assets/Resume.pdf";

import "./index.scss";

const Navbar = () => {
  return (
    <nav id="nav-menu">
      <Link smooth to="/#home" className="nav-link home">
        Home
      </Link>
      <Link smooth to="/#about" className="nav-link about">
        About
      </Link>
      <Link smooth to="/#skills" className="nav-link skills">
        Skills
      </Link>
      <Link smooth to="/#contact" className="nav-link contact">
        Contact
      </Link>
      <Link smooth to="/#projects" className="nav-link projects">
        Projects
      </Link>
      <Link
        id="resume-button-1"
        className="nav-link resume"
        to={Resume}
        download="Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navbar;
