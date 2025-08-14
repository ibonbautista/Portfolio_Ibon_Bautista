import React, { useEffect } from "react";
import "./ProjectDetail.css";

const ProjectDetail = ({ project, onClose }) => {
  const { title, description, technologies, image, github, demo } = project;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="modal-content">
          {/* Columna 1: Info principal */}
          <div className="modal-column modal-info">
            <h2 id="modal-title">{title}</h2>
            <p>{description}</p>
          </div>

          {/* Columna 2: Tecnologías + botones */}
          <div className="modal-column modal-tech">
            <h3>Tecnologías usadas</h3>
            <ul className="tech-list">
              {technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <div className="modal-buttons">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Demo
                </a>
              )}
              <button
                className="btn"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("URL copiada al portapapeles");
                }}
              >
                Compartir URL
              </button>
            </div>
          </div>

          {/* Columna 3: Media */}
          <div className="modal-column modal-media">
            {project?.video ? (
              <video controls src={project.video} className="media-video" />
            ) : project?.image ? (
              <img
                src={project.image}
                alt={`${title} preview`}
                className="media-image"
              />
            ) : (
              <p>No hay medios disponibles</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
