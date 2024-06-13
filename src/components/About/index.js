import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSpringboot, SiSqlite } from "react-icons/si";

import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-inner-container">
      <div className="layout-container">
        <div className="details">
          <h1 className="about">
            Know Who <span>I'm</span>
          </h1>
          <p className="about-description">
            Hello all, I am <span>Ravi Somu</span> from Kanigiri, India. I
            completed my Bachelors in Electronics and Communications Engineering
            in Sree Vahini Institute of Science and Technology.
          </p>
          <p className="my-info">
            I fell in love with programming. My interests are building new{" "}
            <span>Web Technologies</span> and <span>products</span> with the
            technologies I learned.{" "}
          </p>
          <p className="my-info">
            Apart from coding, some other activities that I love to do are{" "}
            <span>learning new things</span>, <span>playing games</span> and
            doing <span>home workouts</span>.
          </p>
        </div>
        <img
          src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
          className="about-image"
          alt="skill"
        />
      </div>
      <h1 className="professional-skillset">
        Professional <span>Skillset</span>
      </h1>
      <div className="skills-layout-container">
        <div className="skill-container">
          <FaHtml5 size={80} />
        </div>
        <div className="skill-container">
          <FaCss3Alt size={80} />
        </div>
        <div className="skill-container">
          <FaBootstrap size={80} />
        </div>
        <div className="skill-container">
          <IoLogoJavascript size={80} />
        </div>
        <div className="skill-container">
          <FaPython size={80} />
        </div>
        <div className="skill-container">
          <FaJava size={80} />
        </div>
        <div className="skill-container">
          <SiSpringboot size={80} />
        </div>
        <div className="skill-container">
          <SiSqlite size={80} />
        </div>
        <div className="skill-container">
          <FaReact size={80} />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
