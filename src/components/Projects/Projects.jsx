import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projects from "../../data/projects";
import ProjectPreviewCard from "./ProjectPreviewCard";
import ProjectDetail from "./ProjectDetail";
import "./Projects.css";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slidesPerView = 4;

  return (
    <section id="projects" className="projects-section">
      <br/>
      <div className="project-carousel-wrapper">
        {/* Botones fuera del carrusel */}
        <div className="carousel-controls">
          <button ref={prevRef} className="scroll-button left">
            ‹
          </button>
          <button ref={nextRef} className="scroll-button right">
            ›
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = '.swiper-pagination';
          }}
          onSlideChange={(swiper) => { setActiveIndex(swiper.activeIndex)}}
          slidesPerView={slidesPerView}
          spaceBetween={15}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: slidesPerView },
          }}
          className="project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectPreviewCard
                project={project}
                isSelected={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination" />
      </div>

      <div className="project-detail-container">
        <ProjectDetail project={projects[selectedIndex]} />
      </div>
    </section>
  );
}
