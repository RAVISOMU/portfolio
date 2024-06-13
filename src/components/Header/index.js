import { Link } from "react-router-dom";

import { FaUser, FaFileAlt, FaProjectDiagram } from "react-icons/fa";

import "./index.css";

const Header = (props) => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/" className="logo">
            Rs.
          </Link>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/" className="logo">
            Rs.
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/project" className="nav-link">
                Projects
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/about" className="nav-link">
              <FaUser />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/project" className="nav-link">
              <FaProjectDiagram />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/resume" className="nav-link">
              <FaFileAlt />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
