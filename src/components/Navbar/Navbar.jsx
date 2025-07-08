import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Ibon Bautista</div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#technologies" onClick={() => setMenuOpen(false)}>Tecnologías</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          <li><ThemeToggle /></li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
