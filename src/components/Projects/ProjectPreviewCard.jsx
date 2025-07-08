// ./components/ProjectPreviewCard.jsx
import './ProjectPreviewCard.css';

export default function ProjectPreviewCard({ project, isSelected, onClick }) {
  return (
    <div
      className={`project-preview-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
}
