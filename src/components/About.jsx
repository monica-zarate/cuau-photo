import React from "react";
import "./styles/main.css";
import about from "../assets/imgs/about.png";
import insta from "../assets/icons/instagram.svg";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">
        Hola! <br /> Soy Cuau
      </h2>
      <img src={about} alt="" className="about__photo" />
      <p className="about__description">
        Siempre he capturado momentos con mi camara, me gusta representar la
        escencia de las personas a traves de retratos en estudio o exterior.
        <br /> Cuando no estoy tomando fotos estoy asistiendo a cursos y
        paseando en bici.
      </p>
      <div className="about__social">
        <p className="about__text">Sigue mis viajes en Instagram! <a href="https://www.instagram.com/cuau34/" target="blank">@cuau34</a></p>
        <a
          href="https://www.instagram.com/cuau34/"
          className="about__insta-link"
        >
          <img src={insta} alt="" className="about__icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
