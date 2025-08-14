import React from 'react';
import './ProjectCarouselCard.css';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, shortDescription, image, technologies, github, deploy } = project;

  return (
    <div
      className="project-carousel-card"
      style={{ backgroundImage: `url(${image})` }}
      tabIndex="0"
      aria-label={`Proyecto: ${title}`}
    >
      <div className="project-carousel-overlay">

        <header className="project-carousel-header">
          <h3>{title}</h3>
        </header>

        <section className="project-carousel-content">
          <p className="project-carousel-description">{shortDescription}</p>

          <ul className="tech-tags">
            {technologies.map((tech, i) => (
              <li key={i} className="tech-tag">{tech}</li>
            ))}
          </ul>
        </section>

        <footer className="project-carousel-actions">
          <button className="action-btn info-btn" aria-label="Ver más información">
            Más
          </button>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn github-btn"
              aria-label="Ver en GitHub"
            >
              <FaGithub />
            </a>
          )}

          {deploy && (
            <a
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn deploy-btn"
              aria-label="Ver despliegue"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </footer>

      </div>
    </div>
  );
};

export default ProjectCard;
