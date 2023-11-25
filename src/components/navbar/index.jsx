import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Resume from "../../assets/HImanshuShuklaResume.pdf";

import "./index.scss";
import { downloadResume } from "../../utils";

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
        download="HimanshuShuklaResume.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={downloadResume}
      >
        Resume
      </Link>
    </nav>
  );
};

export default Navbar;
