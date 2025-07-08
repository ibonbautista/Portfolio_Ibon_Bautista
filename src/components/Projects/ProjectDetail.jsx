// ./components/ProjectDetail.jsx
import './ProjectDetail.css';

export default function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul className="tech-list">
          {project.technologies.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  );
}
