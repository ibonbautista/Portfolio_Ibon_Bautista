import { useEffect, useState } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true; // oscuro por defecto
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <button
  className={`theme-toggle-btn${darkMode ? ' dark' : ''}`}
  aria-label="Cambiar tema claro/oscuro"
  onClick={() => setDarkMode(!darkMode)}
>
  {/* Sol minimalista */}
  <span className="icon sun" aria-hidden="true">&#9728;</span>  
  {/* Luna creciente minimalista */}
  <span className="icon moon" aria-hidden="true">&#9790;</span>  
  <span className="toggle-ball"></span>
</button>
  );
}
