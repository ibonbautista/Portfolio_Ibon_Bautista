import { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./ProjectDetail.css";

export default function ProjectDetail({ project }) {
  const imagePlaceholder = "https://placehold.co/600x400";
  const fallbackYouTubeEmbed =
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=Zobly5bEm8F5O4cv";
  const nodeRef = useRef(null);

  const [modalContent, setModalContent] = useState(null);

  const openModal = (type, src) => {
    setModalContent({ type, src });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="project-detail">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={project.id}
          timeout={300}
          classNames="fade"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef} className="project-detail-card">
            {/* Fila superior: título y botones */}
            <div
              className="top-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "1rem",
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ margin: 0 }}>{project.title}</h2>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  className="project-detail-button github-button"
                  onClick={() =>
                    project.github && window.open(project.github, "_blank")
                  }
                  disabled={!project.github}
                >
                  GitHub
                </button>
                <button
                  className="project-detail-button web-button"
                  onClick={() =>
                    project.link && window.open(project.link, "_blank")
                  }
                  disabled={!project.link}
                >
                  Web
                </button>
              </div>
            </div>

            <div className="project-detail-content">
              {/* Columna descripción */}
              <div className="info-column">
                <div>
                  <p>{project.description}</p>
                  {project.details && (
                    <p className="details">{project.details}</p>
                  )}
                </div>

                {project.technologies?.length > 0 && (
                  <div className="tech-section">
                    <strong>Tecnologías usadas:</strong>
                    <div className="tech-icons">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} title={tech}>
                          <img
                            src={`https://cdn.simpleicons.org/${tech
                              .toLowerCase()
                              .replace(/\s+/g, "")}`}
                            alt={tech}
                            className="tech-icon"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Columna multimedia */}
              <div className="media-column">
                <div className="video-row">
                  {project.video ? (
                    <video
                      controls
                      width="100%"
                      onClick={() => openModal("video", project.video)}
                    >
                      <source src={project.video} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  ) : (
                    <iframe
                      width="100%"
                      height="200"
                      src={fallbackYouTubeEmbed}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      onClick={() => openModal("iframe", fallbackYouTubeEmbed)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
                <div className="image-grid">
                  <div className="image-row">
                    {[project.image1, project.image2, project.image3].map(
                      (imgSrc, idx) => (
                        <img
                          key={idx}
                          src={imgSrc || imagePlaceholder}
                          alt={`Imagen ${idx + 1}`}
                          onClick={() =>
                            openModal("img", imgSrc || imagePlaceholder)
                          }
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalContent.type === "img" && (
              <img src={modalContent.src} alt="Ampliado" />
            )}
            {modalContent.type === "video" && (
              <video
                src={modalContent.src}
                controls
                autoPlay
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  borderRadius: "12px",
                }}
              />
            )}
            {modalContent.type === "iframe" && (
              <iframe
                src={modalContent.src}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: "90vw",
                  height: "80vh",
                  borderRadius: "12px",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
