import React from "react";
import "./styles/main.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">
        ¿Te gustaría agendar una sesión fotográfica?
      </h2>
      <div className="contact__email-wrapper">
        <img src="" alt="" className="contact__icon" />
        <p className="contact__text"></p>
        <a href="mailto:" className="contact__mailto">
          cuau@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
