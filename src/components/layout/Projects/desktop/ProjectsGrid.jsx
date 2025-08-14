import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail.jsx";
import { projects } from "../../../../data/projects.js";
import "./ProjectsGrid.css";

const ProjectsGrid = ({ onOpen }) => {
  const maxVisibleProjects = 7;
  const totalSlots = 8;
  const totalProjects = projects.length;
  const projectsLeft = totalProjects - maxVisibleProjects;
  const hasMore = totalProjects > maxVisibleProjects;

  const visibleProjects = hasMore
    ? projects.slice(0, maxVisibleProjects)
    : projects.slice(0, totalSlots);
  const emptySlots = hasMore
    ? totalSlots - (maxVisibleProjects + 1) // Reservamos el último slot para "ver más"
    : totalSlots - visibleProjects.length;

  const handleClickMore = () => {
    window.location.href = "/all-projects";
  };

  return (
    <section
      className="projects-grid"
      role="list"
      aria-label="Grid de proyectos"
    >
      {visibleProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          role="listitem"
          onOpen={() => onOpen(project)}
        />
      ))}

      {hasMore && (
        <div
          className="project-card more-projects"
          role="listitem"
          tabIndex={0}
          onClick={handleClickMore}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClickMore();
              e.preventDefault();
            }
          }}
          aria-label={`Ver todos los proyectos, hay ${totalProjects} en total`}
        >
          <div className="more-projects-info">
            <p className="more-projects-total">
              Hay {projectsLeft} proyecto/s más
            </p>
            <p className="more-projects-text">Haz clic para ver todos</p>
            <span className="more-projects-icon" aria-hidden="true">
              →
            </span>
          </div>
        </div>
      )}

      {Array.from({ length: emptySlots }).map((_, i) => (
        <div
          key={`empty-${i}`}
          className="project-card empty-slot"
          role="listitem"
          aria-label="Espacio vacío para proyecto futuro"
        >
          <span className="empty-icon" aria-hidden="true">
            ⧗
          </span>
          Próximamente
        </div>
      ))}
    </section>
  );
};

export default ProjectsGrid;
