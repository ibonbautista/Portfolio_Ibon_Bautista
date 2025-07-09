import "./ProjectPreviewCard.css";

export default function ProjectPreviewCard({ project, isSelected, onClick }) {
  return (
    <div
      className={`project-preview-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div
  className="project-preview-card"
  style={{ backgroundImage: `url(${project.image})` }}
>
  <div className="card-overlay">
    <h3>{project.title}</h3>
    <p>{project.shortDescription}</p>
    <div className="project-buttons">
      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
    </div>
  </div>
</div>

    </div>
  );
}
