// src/components/desktop/ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, onOpen }) => {
  const { title, shortDescription, technologies, image, github, demo } =
    project;

  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-overlay">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{shortDescription}</p>
          <ul className="card-tech">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="card-buttons">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Demo
            </a>
            <button
              className="btn btn-more"
              onClick={onOpen}
              arial-label={`Àbrir detalles del proyecto ${title}`}
            >
              Más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
