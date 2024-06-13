import { Link } from "react-router-dom";

import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-inner-container">
      <div className="text-image-container">
        <div className="home-content">
          <h1 className="hi-text">
            Hi There!
            <span className="name"> I'm, Ravi Somu!!</span>
          </h1>
          <p className="description">
            I am a student passionate about Developing and Engineering. I have
            the ability to handle complex projects. Innovative, Creative and
            willing to contribute ideas and learn new things.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
            className="home-image"
            alt="home"
          />
        </div>
      </div>
      <div className="home-button-container">
        <Link to="/about">
          <button type="button" className="about-mobile-button">
            Know Who I'm
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
