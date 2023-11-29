import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Resume from "../../assets/HImanshuShuklaResume.pdf";
import { LuMenu, LuMenuSquare } from "react-icons/lu";

import "./index.scss";
import { downloadResume } from "../../utils";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <button id="hamburger" onClick={toggleNavbar}>
        {showNavbar ? <LuMenuSquare /> : <LuMenu />}
      </button>
      <nav id="nav-menu" className={`navbar ${showNavbar && "active"}`}>
        <Link
          smooth
          to="/#home"
          className="nav-link home"
          onClick={toggleNavbar}
        >
          Home
        </Link>
        <Link
          smooth
          to="/#about"
          className="nav-link about"
          onClick={toggleNavbar}
        >
          About
        </Link>
        <Link
          smooth
          to="/#skills"
          className="nav-link skills"
          onClick={toggleNavbar}
        >
          Skills
        </Link>
        <Link
          smooth
          to="/#contact"
          className="nav-link contact"
          onClick={toggleNavbar}
        >
          Contact
        </Link>
        <Link
          smooth
          to="/#projects"
          className="nav-link projects"
          onClick={toggleNavbar}
        >
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
    </>
  );
};

export default Navbar;
