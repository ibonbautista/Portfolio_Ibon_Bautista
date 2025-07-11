import ContactForm from "./ContactForm";
import "./Contact.css";
import "./ContactForm.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-columns">
          {/* Izquierda: Información de contacto */}
          <div className="contact-info">
            <h2 className="main-contact-title">Si te ha gustado mi trabajo y quieres conocer más mi perfil puedes contactar conmigo aquí:</h2>
            <ul className="contact-list">
              <li className="contact-item linkedin">
                <a href="https://linkedin.com/in/ibon-bautista" target="_blank">
                  LinkedIn
                </a>
              </li>

              <li className="contact-item whatsapp">
                <a href="https://wa.me/34646039800" target="_blank">
                  +34 646039800
                </a>
              </li>

              <li className="contact-item gmail">
                <a href="mailto:tuemail@gmail.com" target="_blank">
                  ibonbautista@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Derecha: Formulario */}
          <div className="contact-form">
            <p>
              Para cualquier duda o consulta rápida, no te vayas, puedes rellenar el formulario a continuación.<br/><br/>
              Estaré encantado de responderte.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
