import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      {/*} Logo on NavBar TopLeft {*/}
      <Link to="/" className="title">
        Shea Onstott
      </Link>
      
      {/*} Hamburger Icon {*/}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/*} Links in NavBar TopRight {*/}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
