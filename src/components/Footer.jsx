import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Joël Haldimann.</p>
      <p id="footerLinks">
        <a
          href="https://www.linkedin.com/in/joël-haldimann-0144312b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/Goeschel18769"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        |<a href="mailto:haldimann.joel@icloud.com"> Email</a>
      </p>
    </footer>
  );
};

export default Footer;
