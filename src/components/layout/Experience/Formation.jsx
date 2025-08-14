import React from 'react';
import './Formation.css';

const formationData = [
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


const Formation = () => {
  return (
    <section className="formation-section">
  <article className="formation-title-card">
    <h2 className="formation-section-title">Formación</h2>
  </article>
  <div className="formation-cards-container">
    {formationData.map((item, index) => (
      <article className="formation-card" key={index}>
        <h3 className="formation-card-title">{item.title}</h3>
        <time className="formation-card-date">{item.date}</time>
        <p className="formation-card-description">{item.description}</p>
      </article>
    ))}
  </div>
</section>
  );
};

export default Formation;
