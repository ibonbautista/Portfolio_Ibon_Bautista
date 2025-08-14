import technologies from "../../../data/technologies";
import "./Technologies.css";
import TechGrid from "./TechGrid";

export default function Technologies() {
  return (
    <section id="skills" className="technologies-section">
      <div className="technologies-container">
        <h2 className="technologies-title">Stack Técnico</h2>
        <div className="technologies-content">
          <TechGrid />
        </div>
      </div>
    </section>
  );
}
