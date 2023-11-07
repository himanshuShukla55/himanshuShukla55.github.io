import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./index.scss";

const Navbar = () => {
  return (
    <nav id="nav-menu">
      <Link smooth to="/#home">
        Home
      </Link>
      <Link smooth to="/#about">
        About
      </Link>
      <Link smooth to="/#skills">
        Skills
      </Link>
      <Link smooth to="/#contact">
        Contact
      </Link>
      <Link smooth to="/#projects">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
