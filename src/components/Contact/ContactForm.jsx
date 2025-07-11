import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form-emailjs">
      {/* Fila 1: Nombre + Email */}
      <div className="input-row">
        <div className="input-group name-group">
          <label htmlFor="user_name">Nombre</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="input-group email-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" required />
        </div>
      </div>

      {/* Fila 2: Mensaje */}
      <div className="input-group full-width">
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" rows="5" required />
      </div>

      {/* Fila 3: Botón + estado */}
      <div className="form-footer">
        {status === 'success' && (
          <div className="success-msg">¡Mensaje enviado correctamente!</div>
        )}
        {status === 'error' && (
          <div className="error-msg">Hubo un problema. Inténtalo más tarde</div>
        )}

        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? (
              <span className="spinner" />
          ) : (
            'Enviar'
          )}
        </button>
      </div>
    </form>
  );
}
