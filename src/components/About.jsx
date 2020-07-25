import React from "react";
import "./styles/main.css";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">Hola! Soy Cuau</h2>
      <p className="about__description">
        Siempre he capturado momentos con mi camara, me gusta capturar la
        escencia de las personas a traves de retratos en estudio o exterior.
      </p>
      <img src="" alt="" className="about__photo" />
      <div className="about__social">
        <p className="about__text">Sigueme en Instagram!</p>
        <a
          href="https://www.instagram.com/cuau34/"
          className="about__insta-link"
        >
          <img src="" alt="" className="about__icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
