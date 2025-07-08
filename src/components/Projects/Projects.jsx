import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import projects from "../../data/projects";
import ProjectPreviewCard from "./ProjectPreviewCard";
import ProjectDetail from "./ProjectDetail";
import "./Projects.css";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="projects" className="projects-section">
      <br />
      <br />
      {/* Mini carrusel de previews */}
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 5 },
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

      {/* Detalle del proyecto seleccionado */}
      <div className="project-detail-container">
        <ProjectDetail project={projects[selectedIndex]} />
      </div>
    </section>
  );
}
