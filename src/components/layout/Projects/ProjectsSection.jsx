// src/components/Projects.jsx
import React from 'react';
import ProjectCarrousel from './mobile/ProjectsCarrousel';
import './ProjectsSection.css'; // crea este archivo

const Projects = () => {
  return (
    <section className="projects-section">
      <ProjectCarrousel />
    </section>
  );
};

export default Projects;
