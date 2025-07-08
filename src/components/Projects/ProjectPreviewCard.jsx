// ./components/ProjectPreviewCard.jsx
import "./ProjectPreviewCard.css";

export default function ProjectPreviewCard({ project, isSelected, onClick }) {
  return (
    <div
      className={`project-preview-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <p>{project.shortDescription}</p>
      <div className="project-buttons">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
