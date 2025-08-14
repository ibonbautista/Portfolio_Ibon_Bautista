// components/ExpSection.jsx
import React from 'react';
import About from './About';
import Experience from './Experience';
import Formation from './Formation';
import './ExpSection.css';

const ExpSection = () => {
  return (
    <section className="exp-section" id="experience">
      <div className="exp-container">
        <h2 className="exp-title">Trayectoria</h2>
        <div className="exp-content">
          <About />
          <Experience />
          <Formation />
        </div>
      </div>
    </section>
  );
};

export default ExpSection;
