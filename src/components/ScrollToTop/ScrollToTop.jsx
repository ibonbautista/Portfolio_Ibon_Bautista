import { useState, useEffect } from "react";
import "./ScrollToTop.css";
import { ChevronUpIcon } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top-btn ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Subir al inicio"
      title="Subir al inicio"
    >
      <svg><ChevronUpIcon /></svg>
    </button>
  );
}
