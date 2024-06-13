import {
  FaRegCopyright,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <div className="footer-container">
    <h4>Designed and Developed by Ravi Somu</h4>
    <h4>
      copyright <FaRegCopyright /> 2024 RS
    </h4>
    <div className="icons-container">
      <a href="https://github.com/RAVISOMU" target="_blank" rel="noreferrer">
        <FaGithub className="icons" />
      </a>
      <a href="www.linkedin.com/in/ravisomu1" target="_blank" rel="noreferrer">
        <FaLinkedin className="icons" />
      </a>
      <a
        href="https://www.instagram.com/msd_ian__7781/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="icons" />
      </a>
    </div>
  </div>
);

export default Footer;
