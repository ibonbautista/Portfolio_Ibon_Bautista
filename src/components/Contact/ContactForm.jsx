import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form-emailjs">
      <label>Nombre</label>
      <input type="text" name="user_name" required />

      <label>Email</label>
      <input type="email" name="user_email" required />

      <label>Mensaje</label>
      <textarea name="message" required />

      <button type="submit">
        {status === 'sending' ? 'Enviando...' : 'Enviar'}
      </button>

      {status === 'success' && <p className="success-msg">¡Mensaje enviado correctamente!</p>}
      {status === 'error' && <p className="error-msg">Hubo un problema. Inténtalo más tarde.</p>}
    </form>
  );
}
