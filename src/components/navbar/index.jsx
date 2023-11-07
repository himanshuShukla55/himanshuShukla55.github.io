import React from "react";
import { HashLink as Link } from "react-router-hash-link";

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
    </nav>
  );
};

export default Navbar;
