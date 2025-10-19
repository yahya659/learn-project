import React from "react";
import Rivew from "./Rivew";
import { ratingData } from "../../data";

export default function Sectionhederrevew({tittle,description}) {
  return (
    <div className="section-header">
      <span className="text-primary">Practice Advice</span>
      <h2>{tittle}</h2>
      <p>{description}</p>
        <div className="ratings">
          {ratingData.map((rivew) => {
            const { id, stars, img, description, name, jop } = rivew;
            return (
              <Rivew
                id={id}
                stars={stars}
                img={img}
                description={description}
                name={name}
                jop={jop}
              />
            );
          })}
        </div>
    </div>
    
  );
}
