import React from "react";
import "./styles/Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contactIcons" />
        </a>
        <a href="mailto:haldimann.joel@icloud.com">
          <IoMdMail className="contactIcons" />
        </a>
        <a
          href="https://github.com/Goeschel18769"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="contactIcons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
