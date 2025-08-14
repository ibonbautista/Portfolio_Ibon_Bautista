import React from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Desarrollador Full Stack – The Bridge',
    date: 'Abr 2025 – May 2025',
    description: 'Diseño y desarrollo de una app full stack con MongoDB, Express, React y Node.',
  },
  {
    title: 'Coordinador deportivo – La Salle Bilbao',
    date: '2019 – 2024',
    description: 'Gestión de club, liderazgo de equipos, planificación y mejora de resultados.',
  },
];


const Experience = () => {
  return (
    <section className="experience-section">
  <article className="experience-title-card">
    <h2 className="experience-section-title">Experiencia</h2>
  </article>
  <div className="experience-cards-container">
    {experienceData.map((item, index) => (
      <article className="experience-card" key={index}>
        <h3 className="experience-card-title">{item.title}</h3>
        <time className="experience-card-date">{item.date}</time>
        <p className="experience-card-description">{item.description}</p>
      </article>
    ))}
  </div>
</section>
  );
};

export default Experience;
