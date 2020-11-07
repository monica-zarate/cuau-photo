import React from "react";
import "./styles/main.css";
import mail from "../assets/icons/mail.svg";
import contact from "../assets/imgs/contact.png";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">
        ¿Te gustaría agendar una sesión fotográfica?
      </h2>
      <img src={contact} alt="" className="contact__img" />
      <div className="contact__email-wrapper">
        <img src={mail} alt="" className="contact__icon" />
        <p className="contact__text">
          Escríbeme tu idea, opciones de fechas y locación, te responderé a la
          brevedad.
        </p>
        <a href="mailto:cuauretrato21@gmail.com" className="contact__mailto">
          cuauretrato21@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
