import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Izquierda: Información de contacto */}
        <div className="contact-info">
          <h2>Contáctame</h2>
          <p>Puedes encontrarme fácilmente en:</p>

          <ul>
            <li>📧 <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a></li>
            <li>💼 <a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a></li>
            <li>📱 <a href="https://wa.me/34XXXXXXXXX" target="_blank">WhatsApp</a></li>
            <li>📍 Bilbao, España</li>
          </ul>
        </div>

        {/* Derecha: Formulario con EmailJS */}
        <div className="contact-form">
          <h2>¿Prefieres escribirme directamente?</h2>
          <p>Completa este formulario y me llegará al instante sin que abras tu email.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
