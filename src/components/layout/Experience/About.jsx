// components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <article className="about-title-card">
        <h2 className="about-section-title">Sobre mí</h2>
      </article>
      <article className="about-content-card">
        <div className="about-text">
          <p>
            Hace unos años decidí dar un giro a mi carrera y seguir mi pasión
            por la programación.
          </p>
          <p>
            Mi formación y experiencia me han llevado al backend, donde
            desarrollo proyectos eficientes, aunque no siempre los más bonitos —
            ¡pero estoy mejorando!
          </p>
          <p>
            Ahora estoy enfocado en fortalecer mi perfil como frontend, para
            convertirme en un desarrollador completo.
          </p>
          <p>
            Por mi formación deportiva, trabajo muy bien en equipo,
            comunicándome eficazmente y resolviendo problemas con creatividad.
          </p>
          <p>Me apasiona la planificación y la organización de proyectos.</p>
        </div>
      </article>
    </section>
  );
};

export default About;
