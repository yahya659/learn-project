import React from "react";

export default function Rivew({ id, stars, img, description, name, jop }) {
  return (
    <div className="rating">
      <span className="stars">{stars}</span>
      <p className="description">{description}</p>
      <div className="person">
        <a href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/" target="_blank">
          <img src={img} alt={name} />
        </a>
        <div>
          <h3 className="tixt-primary">{name}</h3>
          <p>{jop}</p>
        </div>
      </div>
    </div>
  );
}
