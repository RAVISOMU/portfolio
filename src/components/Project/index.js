import { FaGithub, FaVideo } from "react-icons/fa";

import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const Project = () => (
  <div className="project-container">
    <Header />
    <div className="project-inner-container">
      <div className="project-info-container">
        <h1 className="works-heading">
          My Recent <strong>Works</strong>
        </h1>
        <p className>Here are a few projects I've worked on recently.</p>
        <div className="project-layout-container">
          <div className="project-details-container">
            <img
              src="https://res.cloudinary.com/dqso6qusj/image/upload/v1718152893/eckcem2rlmeb6ne5tfix.png"
              className="project-image"
              alt="project"
            />
            <h3 className="project-title">NxtTrendz</h3>
            <p className="project-description">
              NxtTrendz is inspired by Amazon and Flipkart. It is an Ecommerce
              application which provides users to see various products, ratings,
              offers and other information. I have implemented various features
              such as Login/Logout, displaying product details, adding products
              to the cart, sorting and filtering the products.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/RAVISOMU/nxttrendz-"
                className="project-links"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="github-button">
                  <FaGithub className="icon" />
                  GitHub
                </button>
              </a>
              <a
                href="https://ravidevvtrendz.ccbp.tech/"
                className="project-links"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="demo-button">
                  <FaVideo className="icon" />
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="project-details-container">
            <img
              src="https://res.cloudinary.com/dqso6qusj/image/upload/v1718155993/qg879gpmgyfy76ilnfou.png"
              className="project-image"
              alt="project"
            />
            <h3 className="project-title">NxtWatch</h3>
            <p className="project-description">
              NxtWatch is inspired by YouTube. It is used to see various
              categories of videos to the users. I have implemented features
              such as like/dislike, saving video, light/dark mode and handling
              redirections to different routes.
            </p>
            <div className="buttons-container">
              <a
                href="https://ravidevnxtwatch.ccbp.tech/"
                className="project-links"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="demo-button">
                  <FaVideo className="icon" />
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="project-details-container">
            <img
              src="https://res.cloudinary.com/dqso6qusj/image/upload/v1718156858/ovlcbom5k2qdv4eq1vzu.png"
              className="project-image"
              alt="project"
            />
            <h3 className="project-title">Jobby</h3>
            <p className="project-description">
              It is used to see various jobs available in the market with the
              detailed description. I have implemented the features such as
              login/logout, sorting and filtering jobs, jobs detailed
              description.
            </p>
            <div className="buttons-container">
              <a
                href="https://github.com/RAVISOMU/jobby-app"
                className="project-links"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="github-button">
                  <FaGithub className="icon" />
                  GitHub
                </button>
              </a>
              <a
                href="https://ravidevvjobby.ccbp.tech/"
                className="project-links"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="demo-button">
                  <FaVideo className="icon" />
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Project;
