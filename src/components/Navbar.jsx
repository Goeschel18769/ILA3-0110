import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page, path) => {
    setCurrentPage(page);
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav id="navBar">
      <button id="navNameButton" onClick={() => handleMenuClick("Home", "/")}>
        <img src="./img/logo.png"></img>
      </button>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`navButtonBox ${isMenuOpen ? "open" : ""}`}>
        <button
          className="navButton"
          onClick={() => handleMenuClick("Home", "/")}
        >
          Home
        </button>
        <button
          className="navButton"
          onClick={() => handleMenuClick("About", "/about")}
        >
          About
        </button>
        <button
          className="navButton"
          onClick={() => handleMenuClick("Projects", "/projects")}
        >
          Projects
        </button>
        <button
          className="navButton"
          onClick={() => handleMenuClick("Contact", "/contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
