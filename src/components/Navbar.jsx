import React, { useState } from "react";
import "./css/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

// Used to display Nav Menu when used with hamburger click
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Close the menu when a link is clicked
  // Also used to change Hamburger icon to and from X
  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav>

      {/*} Logo on NavBar TopLeft links to homepage {*/}
      <Link to="/" className="title">
        Shea Onstott
      </Link>
      
      {/*} Hamburger Icon {*/}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>

      {/*} Links in NavBar TopRight {*/}
      {/*} If menuOpen is true then display nav {*/}
      {/*} handleLinkClick returns Hamburger icon to 3 bars {*/}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/resume" onClick={handleLinkClick}>Resume</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
        </li>
      </ul>
    
    </nav>
  );
};
