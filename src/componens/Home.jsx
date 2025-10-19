import React from "react";
import { cardData } from "../../data";
import Card from "./Card";
export default function Home() {
  return (
    <section id="home">
      <div className="continer">
        <div className="home-header">
          <span>join us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We Know How large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transprent">
            Learn More
          </a>
        </div>
        <div className="card-continer">
          {cardData.map((card) => {
            // console.log(card.id);
            const { tittle, description, color, bgcolor, img, id } = card;
            return (
              <Card
                key={id}
                tittle={tittle}
                description={description}
                color={color}
                bgcolor={bgcolor}
                img={img}
              />
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
