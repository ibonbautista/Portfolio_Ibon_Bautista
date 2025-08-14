import React from "react";
import "./Hero.css";
import avatar from "/public/images/ibonbautista.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__image">
          <img src={avatar} alt="Ibon Bautista" className="hero__avatar" />
        </div>

        <div className="hero__info">
        <h1 className="hero__title">DESARROLLADOR FULL-STACK</h1>

        <p className="hero__subtitle">
          Orientado al backend, construyendo bases sólidas y eficientes
        </p>

        <div className="hero__buttons">
          <a
            href="https://linkedin.com/in/ibonbautista"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.865 0-2.151 1.455-2.151 2.96v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.38-1.562 2.841-1.562 3.039 0 3.6 2.002 3.6 4.605v5.59z" />
            </svg>
          </a>
          <a
            href="https://github.com/ibonbautista"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5c-6.624 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.389-1.333-1.759-1.333-1.759-1.089-.745.084-.729.084-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.761-1.604-2.665-.303-5.467-1.333-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.874.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.815 1.104.815 2.226 0 1.607-.015 2.902-.015 3.293 0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="images/_CV-IBON-BAUTISTA-FULL-JUN25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver CV"
            download
          >
            {/* SVG de un documento o algo relacionado */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.104.896 2 2 2h12a2 2 0 0 0 2-2V8zm1 7h-4V3.5L15 9zm-3 8.5a1 1 0 0 1-1-1v-3H9l3-3 3 3h-2v3a1 1 0 0 1-1 1z" />
            </svg>
          </a>
        </div>

        <div className="hero__nav">
          <a href="#projects">Ver proyectos</a>
          <a href="#contact">Contacta ahora</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
