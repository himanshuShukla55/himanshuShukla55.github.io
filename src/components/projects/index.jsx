import React from "react";
import "./index.scss";
import { openLinkInNewTab } from "../../utils";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Myntra Clone",
      description:
        "A clone of ecommerce website Myntra. Users can login, browse through items in various categories. They can add items to cart. Pay for items using Razorpay and complete their purchase.",
      stack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/himanshuShukla55/myntra-clone",
      deployedAt: "https://masai-myntra-fashion-clone.netlify.app/",
      image: "./images/myntraPreview.png",
    },
    {
      id: 2,
      title: "Specialized",
      description:
        "A clone of Specialized online bicycle shop, Users can login, Browse through various categories of bycyles. Add bycyles to Cart and complete their purchase by paying through Razorpay.",
      stack: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/himanshuShukla55/OnlineBicycleShop",
      deployedAt: "https://phenomenal-crisp-d9f0f8.netlify.app/",
      image: "./images/specializedPreview.png",
    },
    {
      id: 3,
      title: "Real Estate",
      description:
        "RealEstate is a premier destination for discovering the perfect property to call home. Explore, filter, and find your dream home with RealEstate, where your search for the perfect property begins and ends.",
      stack: ["React", "Redux", "Javascript", "HTML", "CSS"],
      github: "https://github.com/himanshuShukla55/realestate",
      deployedAt: "https://real-estate-b81c.onrender.com",
      image: "./images/realEstatePreview.png",
    },
  ];
  return (
    <div id="projects">
      <h1>My Projects</h1>
      {projects.map((project) => {
        const { id, title, description, stack, image, github, deployedAt } =
          project;
        return (
          <div key={id} className="project-card">
            <img src={require(`${image}`)} alt="website-preview" />
            <div>
              <h1 className="project-title">{title}</h1>
              <p className="project-description">{description}</p>
              <div className="project-tech-stack">
                {stack.map((tech, index) => (
                  <span key={index} className={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="buttons-container">
                <button
                  className="project-github-link"
                  onClick={() => openLinkInNewTab(github)}
                >
                  Github
                </button>
                <button
                  className="project-deployed-link"
                  onClick={() => openLinkInNewTab(deployedAt)}
                >
                  Live
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
