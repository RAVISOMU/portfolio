import { FaDownload } from "react-icons/fa";

import "./index.css";
import Header from "../Header";
import resume from "../../assets/resume.pdf";
import Footer from "../Footer";

const Resume = () => (
  <div className="resume-container">
    <Header />
    <div className="resume-inner-container">
      <h2>
        My <strong>Resume</strong>
      </h2>
      <div className="img-container">
        <iframe
          src={`${resume}#toolbar=0`}
          title="resume"
          className="resume"
        ></iframe>
        <div className="button-container">
          <a href={resume} download="resume">
            <button type="button" className="resume-button">
              Download <FaDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Resume;
