import "./Hero.css";

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Ibon Bautista</h1>
          <p className="subtitle">
            Desarrollador Full Stack • Creativo • Técnico
          </p>
          <p className="about">
            Soy un desarrollador web apasionado por crear soluciones eficientes,
            limpias y visualmente atractivas. Vengo del mundo del deporte, y
            aplico la misma energía, compromiso y organización al código.
          </p>
          <p className="scroll-link">
            <a href="#projects" onClick={handleScroll}>
              Ver proyectos ↓
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
