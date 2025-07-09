import { useEffect, useState } from "react";
import "./TechCategory.css";

export default function TechCategory({ category, technologies, isVisible }) {
  const [show, setShow] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
  if (!isVisible) {
    setAnimatingOut(true);
    setTimeout(() => {
      setShow(false);
      setAnimatingOut(false);
    }, 400); // Igual que en el CSS
  } else {
    setShow(true);
  }
}, [isVisible]);


  if (!show && !animatingOut) return null;

  return (
    <div className={`tech-category ${animatingOut ? "slide-up" : "slide-down"}`} key={category}>
      <div className="icons-row">
        {technologies.map((tech) => (
          <img
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className="tech-icon"
          />
        ))}
      </div>

      <div className="tech-details">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-detail">
            <h3>{tech.name}</h3>
            <ul>
              {tech.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
