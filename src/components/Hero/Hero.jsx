import "./Hero.css";

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Desarrollador Full Stack</h1>
          <p className="subtitle">
          <hr />
            Orientado al Backend, construyendo bases
            robustas y eficientes
          <hr />
          </p>
          <p className="about">
            Una trayectoria variopinta me ha llevado a darle forma a mis ideas y a volcarlas aquí.<br/><br/>
            El diseño UX/UI no es mi mayor virtud, sigo formándome, no le des mucha importancia.<br/><br/>
            Lo importante es que el código funciona y cumple su objetivo.<br/><br/>
            Todo se irá poniendo bonito.
          </p>
          <p className="scroll-links">
            <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
              PROYECTOS ↓
            </a>
            <a href="#technologies" onClick={(e) => handleScroll(e, "#technologies")}>
              TECNOLOGÍAS ↓
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
