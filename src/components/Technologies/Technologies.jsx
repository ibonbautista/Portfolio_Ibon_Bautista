import technologies from '../../data/technologies';
import './Technologies.css';

export default function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      <h2>Tecnologías</h2>
      <div className="categories-grid">
        <div className="category-column">
          <h3 className="category-title">BACKEND</h3>
          <div className="category-content">
            {technologies.Backend.map((tech) => (
              <div key={tech.name} className="tech-item">
                <div className="tech-icon-name">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon"
                  />
                  <div className="tech-name">{tech.name}</div>
                </div>
                <div className="tech-skills-row">
                  {tech.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="category-column">
          <h3 className="category-title">FRONTEND</h3>
          <div className="category-content">
            {technologies.Frontend.map((tech) => (
              <div key={tech.name} className="tech-item">
                <div className="tech-icon-name">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon"
                  />
                  <div className="tech-name">{tech.name}</div>
                </div>
                <div className="tech-skills-row">
                  {tech.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="category-column">
          <h3 className="category-title">OTROS</h3>
          <div className="category-content">
            {technologies.DevOps.map((tech) => (
              <div key={tech.name} className="tech-item">
                <div className="tech-icon-name">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon"
                  />
                  <div className="tech-name">{tech.name}</div>
                </div>
                <div className="tech-skills-row">
                  {tech.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="category-column">
          <h3 className="category-title">HERRAMIENTAS</h3>
          <div className="category-content">
            {technologies.Basicos.map((tech) => (
              <div key={tech.name} className="tech-item">
                <div className="tech-icon-name">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon"
                  />
                  <div className="tech-name">{tech.name}</div>
                </div>
                <div className="tech-skills-row">
                  {tech.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
