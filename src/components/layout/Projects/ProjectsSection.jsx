// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import ProjectCarousel from "./mobile/ProjectsCarousel";
import ProjectsGrid from "./desktop/ProjectsGrid";
import ProjectDetail from "./desktop/ProjectDetail";
import { projects } from "../../../data/projects";
import "./ProjectsSection.css"; // crea este archivo

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Control modal con hash para que sea navegable
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#project-")) {
        const id = hash.replace("#project-", "");
        const project = projects.find((p) => p.id.toString() === id);
        setSelectedProject(project || null);
      } else {
        setSelectedProject(null);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const openModal = (project) => {
    window.location.hash = `project-${project.id}`;
  };

  const closeModal = () => {
    window.location.hash = "#projects";
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Proyectos</h2>
        {/* Carrusel para móvil y tablet */}
        <div className="projects-content">
          <div className="projects-carousel">
            <ProjectCarousel />
          </div>

          {/* Cuadrícula para laptop y superior */}
          <div className="projects-grid-container">
            <ProjectsGrid onOpen={openModal} />
          </div>

          {selectedProject && (
            <ProjectDetail project={selectedProject} onClose={closeModal} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
