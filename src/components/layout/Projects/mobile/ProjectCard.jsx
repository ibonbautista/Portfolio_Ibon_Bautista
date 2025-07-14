// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, shortDescription, image1, technologies } = project;

  return (
    <div className="project-card" style={{ backgroundImage: `url(${image1})` }}>
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <div className="tech-tags">
          {technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
