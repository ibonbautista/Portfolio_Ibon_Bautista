import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { CheckCircle, AlertTriangle } from "lucide-react";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form-emailjs">
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="user_name">Nombre*</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="input-group">
          <label htmlFor="user_email">Email*</label>
          <input type="email" name="user_email" required />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="message">Mensaje*</label>
        <textarea name="message" rows="4" required />
      </div>

      <div className="form-footer">
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? ( 
            <>
            <span className="spinner" /> 
            <span>Enviando...</span>
            </>
          ) : (
            <span>Enviar</span>)}
        </button>

        {status === "success" && (
          <p className="form-status 
          success">
            <CheckCircle size={18} style={{ marginRight: "6px" }} />¡Mensaje enviado!</p>
        )}
        {status === "error" && (
          <p className="form-status error">
            <AlertTriangle size={18} style={{ marginRight: "6px" }} />
            Hubo un error. Inténtalo más tarde.
          </p>
        )}
      </div>
    </form>
  );
}
