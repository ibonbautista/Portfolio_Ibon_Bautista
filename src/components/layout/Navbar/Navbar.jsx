import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Estado para enlace activo

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Detecta si pantalla es desktop (>= 1024px)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1024;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) {
        setIsOpen(false);
        document.body.classList.remove("no-scroll");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (!prev) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return !prev;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target) &&
        !isDesktop // solo cerrar en móvil y tablet
      ) {
        setIsOpen(false);
        document.body.classList.remove("no-scroll");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktop]);

  // Manejador para cambiar enlace activo y cerrar menú en móvil
  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    if (!isDesktop) toggleMenu();
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__logo">IBON BAUTISTA</div>

      {!isDesktop && (
        <button
          ref={toggleRef}
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      )}

      <nav
        id="navbar-menu"
        ref={menuRef}
        className={`navbar__menu ${isDesktop ? "open" : isOpen ? "open" : ""}`}
        role="navigation"
        aria-label="Main menu"
      >
        <a
          href="#home"
          className={activeLink === "#home" ? "active" : ""}
          onClick={() => handleLinkClick("#home")}
        >
          Inicio
        </a>
        <a
          href="#experience"
          className={activeLink === "#experience" ? "active" : ""}
          onClick={() => handleLinkClick("#experience")}
        >
          Trayectoria
        </a>
        <a
          href="#projects"
          className={activeLink === "#projects" ? "active" : ""}
          onClick={() => handleLinkClick("#projects")}
        >
          Proyectos
        </a>
        <a
          href="#skills"
          className={activeLink === "#skills" ? "active" : ""}
          onClick={() => handleLinkClick("#skills")}
        >
          Stack Técnico
        </a>
        <a
          href="#contact"
          className={activeLink === "#contact" ? "active" : ""}
          onClick={() => handleLinkClick("#contact")}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
