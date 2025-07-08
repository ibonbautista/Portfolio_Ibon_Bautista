
import { useEffect, useState } from 'react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true; // 🌑 oscuro por defecto
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  );
}
