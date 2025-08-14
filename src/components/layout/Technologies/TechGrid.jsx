import React, { useState } from 'react';
import technologies from '../../../data/technologies';
import './TechGrid.css';

export default function TechGrid() {
  const [openCategory, setOpenCategory] = useState('Backend'); // el que se abre por defecto

  const categories = [
    { name: 'Backend', data: technologies.Backend },
    { name: 'Frontend', data: technologies.Frontend },
    { name: 'Otros', data: technologies.DevOps },
    { name: 'Herramientas', data: technologies.Basicos }
  ];

  const toggleCategory = (name) => {
    setOpenCategory(prev => (prev === name ? null : name));
  };

  return (
    <section className="techgrid-section">
      <div className="tech-sections">
        {categories.map(({ name, data }) => (
          <div key={name} className="accordion-section">
            <button
              className={`accordion-toggle ${openCategory === name ? 'open' : ''}`}
              onClick={() => toggleCategory(name)}
              aria-expanded={openCategory === name}
              aria-controls={`section-${name}`}
            >
              {name}
              <span className="arrow">{openCategory === name ? '▲' : '▼'}</span>
            </button>

            <div
              id={`section-${name}`}
              className={`accordion-content ${openCategory === name ? 'expanded' : 'collapsed'}`}
            >
              <div className="tech-grid">
                {data.map((tech) => (
                  <div key={tech.name} className="tech-grid-item">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="tech-icon"
                    />
                    <div className="tech-name">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
