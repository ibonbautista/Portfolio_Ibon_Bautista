// src/components/ProjectCarrousel.jsx
import React, { useState, useRef } from 'react';
import './ProjectsCarousel.css';
import ProjectCard from './ProjectCarouselCard.jsx';
import { projects } from '../../../../data/projects.js';

const ProjectCarrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2;

  const maxIndex = Math.ceil(projects.length / visibleCards) - 1;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      handleNext();
    } else if (deltaX < -swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section className="horizontal-carousel" role='region' aria-label='Project carousel'>
      <div
        className="carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: maxIndex + 1 }, (_, slideIndex) => {
            const start = slideIndex * visibleCards;
            const cardsGroup = projects.slice(start, start + visibleCards);

            return (
              <div className="carousel-slide" key={slideIndex}>
                {cardsGroup.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
                {cardsGroup.length < visibleCards && (
                  <div className="carousel-card-placeholder" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contenedor de botones y dots abajo */}
      <div className="carousel-controls">
        <button
          className="carousel-btn left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>

        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }, (_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
        </button>
      </div>
    </section>
  );
};

export default ProjectCarrousel;
