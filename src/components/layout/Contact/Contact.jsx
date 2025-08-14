import ContactForm from "./ContactForm";
import "./Contact.css";
import { useState } from "react";
import { Clipboard, Check, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ibonbautista@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Error al copiar el correo:", err);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>

        <div className="contact-columns">
          {/* Izquierda: Información de contacto */}
          <div className="contact-info">
            <h2 className="main-contact-title">
              Puedes contactar conmigo aquí:
            </h2>

            <div className="contact-rows">
              {/* Fila 1: LinkedIn y WhatsApp */}
              <div className="contact-row">
                <div className="contact-item linkedin">
                  <a
                    href="https://linkedin.com/in/ibon-bautista"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={18}
                      style={{
                        marginRight: "0.5rem",
                        verticalAlign: "middle",
                      }}
                    />
                    LinkedIn
                  </a>
                </div>

                <div className="contact-item whatsapp">
                  <a
                    href="https://wa.me/34646039800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +34 646039800
                  </a>
                </div>
              </div>

              {/* Fila 2: Email con botón de copia */}
              <div className="contact-row">
                <div className="contact-item gmail">
                  <button
                    onClick={handleCopy}
                    className="copy-button"
                    aria-label="Copiar correo"
                  >
                    <span className="copy-email">ibonbautista@gmail.com</span>
                    {copied ? (
                      <Check className="copy-icon success" size={18} />
                    ) : (
                      <Clipboard className="copy-icon" size={18} />
                    )}
                  </button>
                  {copied && (
                    <span className="copy-feedback" role="status" aria-live="polite">
                      ¡Copiado!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Derecha: Formulario */}
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
