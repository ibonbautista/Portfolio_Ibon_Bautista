import './TechCategory.css';

export default function TechCategory({ category, technologies }) {
  return (
    <div className="tech-category">
      <div className="icons-row">
        {technologies.map((tech) => (
          <img
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="tech-icon"
          />
        ))}
      </div>

      <div className="tech-details">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-detail">
            <h3>{tech.name}</h3>
            <ul>
              {tech.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
