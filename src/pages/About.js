import React from "react";
import AboutImage from "../assets/dosa.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ab.
          Placeat laborum quam numquam tenetur earum nisi facilis, ab sequi
          obcaecati reiciendis quisquam, harum iusto commodi. Laudantium, quo.
          Nulla delectus ratione doloribus dolorum. Officiis labore nostrum
          quasi nulla! Ut sapiente, fuga voluptatem odit animi quasi
          perspiciatis laudantium ea eligendi sed eum expedita porro perferendis
          quisquam excepturi eos, cum eius! Nihil?
        </p>
      </div>
    </div>
  );
}

export default About;
